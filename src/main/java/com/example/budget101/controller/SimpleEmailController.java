package com.example.budget101.controller;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.User;
import com.example.budget101.repository.CagnotteRepository;
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

    @Autowired
    public CagnotteRepository cagnotteRepository;

    @ResponseBody
    @RequestMapping("/sendEmail")
    public String sendSimpleEmail(@RequestParam String id) {
        Long idL = parseLong(id);

        String mailBody = "Vous avez demandé un récapitulatif de vos cagnottes.\n\n Voici le récapitulatif : \n\n";

        User user = userRepository.findById(idL).get();
        String email = user.getEmail();

        Iterable<Cagnotte> cagnottes = cagnotteRepository.findByBudgetId(user.getBudget().getId());
        for (Cagnotte cagnotte : cagnottes) {
            mailBody += cagnotte.getNom() + " : \n\t doit atteindre : " + cagnotte.getMontantTT() + "€, pour le " + cagnotte.getEnd_date() + "\n";
            mailBody += "\t posséde : " + cagnotte.getMontantActuel() + "€ et reçoit : " + cagnotte.getPrelevementMensuel() + "€ par mois\n\n";
        }


        // Create a Simple MailMessage.
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(email);
        message.setSubject("Récapitulatif de vos cagnottes");
        message.setText(mailBody);

        // Send Message!
        this.emailSender.send(message);

        return "Email Sent!";
    }

}