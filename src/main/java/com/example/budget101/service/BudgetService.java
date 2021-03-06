package com.example.budget101.service;

import com.example.budget101.model.Budget;
import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.Depense;
import com.example.budget101.model.User;
import com.example.budget101.repository.BudgetRepository;
import com.example.budget101.repository.CagnotteRepository;
import com.example.budget101.repository.DepenseRepository;
import com.example.budget101.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Data
@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private CagnotteRepository cagnotteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DepenseRepository depenseRepository;

    public Optional<Budget> getBudget(final Long id) {
        return budgetRepository.findById(id);
    }

    public Budget saveBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public Iterable<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public Float getTotalCompte(Long id) {
        User user = userRepository.findById(id).get();
        Budget b = budgetRepository.getBudgetById(user.getBudget().getId());
        return b.getCompteTT();
    }

    //Function Cagnotte

    public Cagnotte saveCagnotte(Cagnotte cagnotte) {
        return cagnotteRepository.save(cagnotte);
    }

    public Iterable<Cagnotte> getAllCagnoteByBudget(final Long id) {
        User user = userRepository.findById(id).get();
        return cagnotteRepository.findByBudgetId(user.getBudget().getId());
    }

    public Integer sizeCagnottesByBudget(final Long id) {
        int size = 0;
        User user = userRepository.findById(id).get();
        for (Cagnotte cagnotte : cagnotteRepository.findByBudgetId(user.getBudget().getId())) {
            size = size + 1;
        }
        return size;
    }

    public Double getTotalCagnotteByBudget(final Long id) {
        Double total = 0.0;
        User user = userRepository.findById(id).get();
        for (Cagnotte cagnotte : cagnotteRepository.findByBudgetId(user.getBudget().getId())) {
            total = total + cagnotte.getMontantActuel();
        }
        return total;
    }

    public Double getTotalPm(final Long id) {
        Double total = 0.0;
        User user = userRepository.findById(id).get();
        for (Cagnotte cagnotte : cagnotteRepository.findByBudgetId(user.getBudget().getId())) {
            total = total + cagnotte.getPrelevementMensuel();
        }
        return total;
    }

    public Cagnotte addCagnottes(int id, String nom, Date start, Date end, Double montantTT, Double montantActuel, Double pm) {
        Long idL = (long) id;
        User user = userRepository.findById(idL).get();
        Budget budget = user.getBudget();
        Cagnotte cagnotte = new Cagnotte();
        cagnotte.setBudget(budget);
        cagnotte.setNom(nom);
        cagnotte.setStart_date(start);
        cagnotte.setEnd_date(end);
        cagnotte.setMontantTT(montantTT);
        cagnotte.setPrelevementMensuel(pm);
        cagnotte.setMontantActuel(montantActuel);
        return cagnotteRepository.save(cagnotte);
    }

    public Cagnotte modifCagnottes(int id, String nom, Date startD, Date endD, Double montantTTD, Double montantActuelD, Double pmD) {
        Long idL = (long) id;
        User user = userRepository.findById(idL).get();
        Budget budget = user.getBudget();
        Cagnotte cagnotte = cagnotteRepository.findById(idL).get();
        cagnotte.setBudget(budget);
        cagnotte.setNom(nom);
        cagnotte.setStart_date(startD);
        cagnotte.setEnd_date(endD);
        cagnotte.setMontantTT(montantTTD);
        cagnotte.setPrelevementMensuel(pmD);
        cagnotte.setMontantActuel(montantActuelD);
        return cagnotteRepository.save(cagnotte);
    }


    //Function Depense

    public Depense addDepense(int id, String nom, Double montantD, Date startD) {
        Long idL = (long) id;
        User user = userRepository.findById(idL).get();
        Budget budget = user.getBudget();
        Depense depense = new Depense();
        depense.setBudget(budget);
        depense.setNom(nom);
        depense.setMontant(montantD);
        depense.setDate(startD);
        return depenseRepository.save(depense);
    }
}
