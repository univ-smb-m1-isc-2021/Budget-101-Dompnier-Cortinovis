package com.example.budget101.service;

import com.example.budget101.model.Budget;
import com.example.budget101.model.Cagnotte;
import com.example.budget101.repository.BudgetRepository;
import com.example.budget101.repository.CagnotteRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private CagnotteRepository cagnotteRepository;

    public Optional<Budget> getBudget(final Long id) {
        return budgetRepository.findById(id);
    }

    public Budget saveBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public Iterable<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    //Function Cagnotte

    public Cagnotte saveCagnotte(Cagnotte cagnotte) {
        return cagnotteRepository.save(cagnotte);
    }

    public Iterable<Cagnotte> getAllCagnoteByBudget(final Long id) {
        return cagnotteRepository.findByBudget(id);
    }

    public Integer sizeCagnottesByBudget(final Long id) {
        int size = 0;
        for (Cagnotte cagnotte : cagnotteRepository.findByBudget(id)) {
            size = size + 1;
        }
        return size;
    }

    public Double getTotalCagnotteByBudget(final Long id) {
        Double total = 0.0;
        for (Cagnotte cagnotte : cagnotteRepository.findByBudget(id)) {
            total = total + cagnotte.getMontantActuel();
        }
        return total;
    }

    public Double getTotalBudget(final Long id) {
        Double total = 0.0;
        for (Cagnotte cagnotte : cagnotteRepository.findByBudget(id)) {
            total = total + cagnotte.getMontantTT();
        }
        return total;
    }
}
