package com.example.budget101.controller;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.Employee;
import com.example.budget101.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/cagnottes")
    @ResponseBody
    public Iterable<Cagnotte> getCagnottes(@RequestParam final Long id) {
        return budgetService.getAllCagnoteByBudget(id);
    }

    @GetMapping("/cagnottesTT")
    @ResponseBody
    public Double getTotalCagnottes(@RequestParam final Long id) {
        return budgetService.getTotalCagnotteByBudget(id);
    }

    @GetMapping("/budgetCagnottes")
    @ResponseBody
    public Double getTotalBudget(@RequestParam final Long id) {
        return budgetService.getTotalBudget(id);
    }

    @GetMapping("/addCagnottes")
    @ResponseBody
    public Iterable<Cagnotte> addCagnottes(@RequestParam final Long id) {
        return budgetService.getAllCagnoteByBudget(id);
    }


}
