package com.example.server.models;

import javax.persistence.*;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String itemName;

    @Column
    private int totalQuantity;

    @Column
    private double itemTotalPrice;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(int totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public double getItemTotalPrice() {
        return itemTotalPrice;
    }

    public void setItemTotalPrice(double itemTotalPrice) {
        this.itemTotalPrice = itemTotalPrice;
    }
}
