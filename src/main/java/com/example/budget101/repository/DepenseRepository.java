package com.example.budget101.repository;

import com.example.budget101.model.Depense;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepenseRepository extends CrudRepository<Depense, Long> {
}
