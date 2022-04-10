package com.example.budget101.controller;

import com.example.budget101.model.User;
import com.example.budget101.service.UserService;
import com.example.budget101.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping("/getUser")
    public String getUser(String email, String password) {
        return userServiceImpl.connection(email, password); // user not found - wrong password - connection success
    }

    @PostMapping("/createUser")
    public User createUser(String email, String password) {
        return userServiceImpl.save(email, password);
    }


}