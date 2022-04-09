package com.example.budget101.service;

import com.example.budget101.model.Cagnotte;
import com.example.budget101.repository.CagnotteRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class CagnotteService {

    @Autowired
    private CagnotteRepository cagnotteRepository;

    public Optional<Cagnotte> getCagnotte(final Long id) {
        return cagnotteRepository.findById(id);
    }

    public Iterable<Cagnotte> getCagnottes() {
        return cagnotteRepository.findAll();
    }

    public void deleteCagnotte(final Long id) {
        cagnotteRepository.deleteById(id);
    }

    public Cagnotte saveCagnotte(Cagnotte cagnotte) {
        Cagnotte savedCagnotte = cagnotteRepository.save(cagnotte);
        return savedCagnotte;
    }

}
