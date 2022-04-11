package com.example.budget101.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "depense")
public class Depense implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "montant")
    private double montant;

    @Column(name = "date")
    private Date date;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_budget")
    private Budget budget;

    public Depense(Budget budget) {
        this.budget = budget;
    }

    public Depense() {
    }
}