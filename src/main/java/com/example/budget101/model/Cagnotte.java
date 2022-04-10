package com.example.budget101.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

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

//    @Column(name = "start")
//    private Date start;
//
//    @Column(name = "end")
//    private Date end;

    @Column(name = "montantTT")
    private Double montantTT;

    @Column(name = "montantActuel")
    private Double montantActuel;

    @Column(name = "prelevementMensuel")
    private Double prelevementMensuel;

    @ManyToOne
    @JoinColumn(name = "id_budget")
    private Budget budget;

    public Cagnotte() {

    }
}