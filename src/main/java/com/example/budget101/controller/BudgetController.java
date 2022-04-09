package com.example.budget101.controller;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.Employee;
import com.example.budget101.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @PostMapping("/cagnottes")
    public Iterable<Cagnotte> getCagnottes(final Long id) {
        return budgetService.getAllCagnoteByBudget(id);
    }

    @PostMapping("/cagnottesTT")
    public Double getTotalCagnottes(final Long id) {
        return budgetService.getTotalCagnotteByBudget(id);
    }

    @PostMapping("/budgetCagnottes")
    public Double getTotalBudget(final Long id) {
        return budgetService.getTotalBudget(id);
    }




}
