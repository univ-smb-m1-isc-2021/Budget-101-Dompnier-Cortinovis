package com.example.budget101.service;

import com.example.budget101.model.User;

public interface UserService {
    User findByEmail(String email);

    String connection(String email, String password);

    User save(String email, String password);
}
