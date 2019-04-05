package jp182.sergej.admin;

import jp182.sergej.admin.model.User;
import jp182.sergej.admin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void run(ApplicationArguments args) {
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
        userRepository.save(new User("John", "Doe", "johndoe@test.com"));
    }
}