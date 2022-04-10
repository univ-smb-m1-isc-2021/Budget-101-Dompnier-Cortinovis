package com.example.budget101.service;

import com.example.budget101.model.User;
import com.example.budget101.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public User findByEmail(String email) {
        User user = null;
        try {
            user = userRepository.findByEmail(email);
        }catch (Exception e){
            e.printStackTrace();
        }
        return user;
    }

    @Override
    public String connection(String email, String password) {
        User user = null;
        String mdp = new BCryptPasswordEncoder().encode(password);
        try {
            user = userRepository.findByEmail(email);
        }catch (Exception e){
            e.printStackTrace();
        }
        if(user == null){
            return "user not found";
        }else if(!user.getPassword().equals(mdp)){
            return "wrong password";
        }else {
            return "connection success";
        }
    }

    @Override
    public User save(String email, String password) {
        User user = new User(email, new BCryptPasswordEncoder().encode(password));
        return userRepository.save(user);
    }


}
