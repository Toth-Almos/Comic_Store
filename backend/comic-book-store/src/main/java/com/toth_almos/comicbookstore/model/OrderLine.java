package com.toth_almos.comicbookstore.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@Table(name = "order_line")
public class OrderLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int productId;
    private int shopOrderId;
    private int quantity;

    public OrderLine(int productId, int shopOrderId, int quantity) {
        this.productId = productId;
        this.shopOrderId = shopOrderId;
        this.quantity = quantity;
    }
}
