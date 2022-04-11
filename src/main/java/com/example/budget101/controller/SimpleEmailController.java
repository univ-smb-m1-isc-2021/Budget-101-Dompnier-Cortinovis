package com.example.budget101.controller;

import com.example.budget101.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import static java.lang.Long.parseLong;

@Controller
public class SimpleEmailController {

    @Autowired
    public JavaMailSender emailSender;

    @Autowired
    public UserRepository userRepository;

    @ResponseBody
    @RequestMapping("/sendEmail")
    public String sendSimpleEmail(@RequestParam String id) {
        Long idL = parseLong(id);
        String email = userRepository.findById(idL).get().getEmail();

        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(email);
        message.setSubject("Récapitulatif de vos cagnottes");
        message.setText("Hello, Im testing Simple Email");

        // Send Message!
        this.emailSender.send(message);

        return "Email Sent!";
    }

}