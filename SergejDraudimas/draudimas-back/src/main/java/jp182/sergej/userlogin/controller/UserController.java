package jp182.sergej.userlogin.controller;


import jp182.sergej.userlogin.exception.ResourceNotFoundException;
import jp182.sergej.userlogin.model.User;
import jp182.sergej.userlogin.payload.UserData;
import jp182.sergej.userlogin.payload.UserIdentityAvailability;
import jp182.sergej.userlogin.payload.UserProfile;
import jp182.sergej.userlogin.payload.UserSummary;
import jp182.sergej.userlogin.repository.UserRepository;
import jp182.sergej.userlogin.security.CurrentUser;
import jp182.sergej.userlogin.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername());
        return userSummary;
    }

    @PostMapping("/user/changepsw")
    @PreAuthorize("hasRole('USER')")
    public @ResponseBody void changeUserPassword(@CurrentUser UserPrincipal currentUser, @RequestBody UserData data) {
        User user = userRepository.findByUsername(currentUser.getUsername())
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username: " + currentUser.getUsername())
                );
        user.setPassword(data.getPassword());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));


        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername());

        return userProfile;
    }
}
