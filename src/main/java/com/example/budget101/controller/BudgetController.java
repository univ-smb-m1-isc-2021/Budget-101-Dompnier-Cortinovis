package com.example.budget101.controller;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.Employee;
import com.example.budget101.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    DateFormat shortDateFormat = DateFormat.getDateTimeInstance(
            DateFormat.SHORT,
            DateFormat.SHORT);

    @GetMapping("/addCagnotte")
    @ResponseBody
    public Cagnotte addCagnotte(@RequestParam int id, @RequestParam String nom, @RequestParam String start, @RequestParam String end, @RequestParam String montantTT,@RequestParam String montantActuel, @RequestParam String pm) throws ParseException {
        Date startD=new SimpleDateFormat("yyyy-MM-dd").parse(start);
        Date endD=new SimpleDateFormat("yyyy-MM-dd").parse(end);
        Double montantTTD=Double.parseDouble(montantTT);
        Double montantActuelD=Double.parseDouble(montantActuel);
        Double pmD=Double.parseDouble(pm);
        return budgetService.addCagnottes(id, nom, startD, endD, montantTTD, montantActuelD, pmD);
    }


}
