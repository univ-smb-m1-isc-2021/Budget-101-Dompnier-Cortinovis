package com.example.budget101.controller;

import com.example.budget101.service.CagnotteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CagnotteController {

    @Autowired
    private CagnotteService cagnotteService;


}
