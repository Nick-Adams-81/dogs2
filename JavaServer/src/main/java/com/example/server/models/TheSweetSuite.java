package com.example.server.models;


import javax.persistence.*;

@Entity
@Table(name = "TheSweetSuite")
public class TheSweetSuite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String itemName;

    @Column
    private double cost;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setProductName(String productName) {
        this.itemName = productName;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
