package com.example.budget101.repository;

import com.example.budget101.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.email =:email")
    User findByEmail(String email);

    Optional<User> findById(Long id);
}
