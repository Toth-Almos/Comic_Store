package com.toth_almos.comicbookstore.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@Table(name = "shop_order")
public class ShopOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int userId;
    private String shippingAddress;
    private Date orderDate;
    private double totalPrice;
    private String status;

    public ShopOrder(int userId, String shippingAddress, Date orderDate, double totalPrice, String status) {
        this.userId = userId;
        this.shippingAddress = shippingAddress;
        this.orderDate = orderDate;
        this.totalPrice = totalPrice;
        this.status = status;
    }

}
