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

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    @Column(name = "montantTT")
    private Double montantTT;

    @Column(name = "montantActuel")
    private Double montantActuel;

    @Column(name = "prelevementMensuel")
    private Double prelevementMensuel;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_budget")
    private Budget budget;

    public Cagnotte() {

    }
}