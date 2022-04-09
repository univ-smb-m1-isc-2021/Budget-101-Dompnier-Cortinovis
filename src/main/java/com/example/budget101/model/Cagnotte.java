package com.example.budget101.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "cagnotte")
public class Cagnotte implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "montantTT")
    private Double montantTT;

    @Column(name = "montantActuel")
    private Double montantActuel;

    @Column(name = "previsionMensuel")
    private Double previsionMensuel;

    @ManyToOne
    @JoinColumn(name = "id_budget")
    private Budget budget;

    public Cagnotte() {

    }
}