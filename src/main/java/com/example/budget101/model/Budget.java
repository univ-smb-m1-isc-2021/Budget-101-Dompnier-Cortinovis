package com.example.budget101.model;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "budget")
public class Budget implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "compteTT")
    private Float compteTT;



    public Budget() {
    }

    public Float getCompteTT() {
        return compteTT;
    }

    public void setCompteTT(Float compteTT) {
        this.compteTT = compteTT;
    }



}
