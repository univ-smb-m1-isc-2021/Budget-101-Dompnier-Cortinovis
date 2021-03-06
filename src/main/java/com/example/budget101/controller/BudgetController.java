package com.example.budget101.controller;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.Depense;
import com.example.budget101.model.Employee;
import com.example.budget101.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static java.lang.Long.parseLong;

@RestController
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping("/cagnottes")
    @ResponseBody
    public Iterable<Cagnotte> getCagnottes(@RequestParam String id) {
        Long idL = parseLong(id);
        return budgetService.getAllCagnoteByBudget(idL);
    }

    @GetMapping("/infoCagnotte")
    @ResponseBody
    public Map getTotalCagnottes(@RequestParam final Long id) {
        Double ttc = budgetService.getTotalCagnotteByBudget(id);
        int nbC = budgetService.sizeCagnottesByBudget(id);
        Double ttPm = budgetService.getTotalPm(id);
        Float compte = budgetService.getTotalCompte(id);

        Map<String,String> map = new HashMap<String,String>();

        map.put("solde", Float.toString(compte));
        map.put("prelevement", Double.toString(ttPm));
        map.put("nbCagnotte", Integer.toString(nbC));
        map.put("budgetC", Double.toString(ttc));

        return map;
    }

    @GetMapping("/nbCagnottes")
    @ResponseBody
    public int getNbCagnottes(@RequestParam final Long id) {
        return budgetService.sizeCagnottesByBudget(id);
    }

    @GetMapping("/TotalPm")
    @ResponseBody
    public Double getTotalPm(@RequestParam final Long id) {
        return budgetService.getTotalPm(id);
    }

    @GetMapping("/compteBudget")
    @ResponseBody
    public Float getCompteBudget(@RequestParam final Long id) {
        return budgetService.getTotalCompte(id);
    }



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

    @GetMapping("/modifCagnotte")
    @ResponseBody
    public Cagnotte modifCagnotte(@RequestParam int id, @RequestParam String nom, @RequestParam String start, @RequestParam String end, @RequestParam String montantTT,@RequestParam String montantActuel, @RequestParam String pm) throws ParseException {
        Date startD=new SimpleDateFormat("yyyy-MM-dd").parse(start);
        Date endD=new SimpleDateFormat("yyyy-MM-dd").parse(end);
        Double montantTTD=Double.parseDouble(montantTT);
        Double montantActuelD=Double.parseDouble(montantActuel);
        Double pmD=Double.parseDouble(pm);
        return budgetService.modifCagnottes(id, nom, startD, endD, montantTTD, montantActuelD, pmD);
    }

    @GetMapping("/addDepense")
    @ResponseBody
    public Depense addDepense(@RequestParam int id, @RequestParam String nom, @RequestParam String montant, @RequestParam String date) throws ParseException {
        Date startD=new SimpleDateFormat("yyyy-MM-dd").parse(date);
        Double montantD=Double.parseDouble(montant);
        return budgetService.addDepense(id, nom, montantD, startD);
    }

}
