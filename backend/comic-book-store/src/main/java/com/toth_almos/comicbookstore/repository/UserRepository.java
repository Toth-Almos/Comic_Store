package com.toth_almos.comicbookstore.repository;

import com.toth_almos.comicbookstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByEmailAndPassword(String email, String password);
    User findByEmail(String email);
}
