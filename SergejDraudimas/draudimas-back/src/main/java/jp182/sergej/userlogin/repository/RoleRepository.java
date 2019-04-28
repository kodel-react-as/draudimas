package jp182.sergej.userlogin.repository;

import jp182.sergej.userlogin.model.Role;
import jp182.sergej.userlogin.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
