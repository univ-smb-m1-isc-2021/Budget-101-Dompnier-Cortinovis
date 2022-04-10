package com.example.budget101.service;

import com.example.budget101.model.User;

public interface UserService {
    User findByEmail(String email);

    User save(String email, String password);
}
