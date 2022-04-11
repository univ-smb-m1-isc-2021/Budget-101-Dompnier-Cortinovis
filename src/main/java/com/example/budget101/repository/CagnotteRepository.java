package com.example.budget101.repository;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

@Repository
public interface CagnotteRepository extends JpaRepository<Cagnotte, Long> {

    ArrayList<Cagnotte> findByBudgetId(final Long id);

    ArrayList<Double> findMontantActuelByBudget(final Long id);

    ArrayList<Double> findMontantTTByBudget(final Long id);
}
