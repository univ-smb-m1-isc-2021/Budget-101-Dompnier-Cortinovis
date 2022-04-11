package com.example.budget101.service;

import com.example.budget101.model.Budget;
import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.User;
import com.example.budget101.repository.BudgetRepository;
import com.example.budget101.repository.CagnotteRepository;
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
        Budget b = budgetRepository.getBudgetById(id);
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
}
