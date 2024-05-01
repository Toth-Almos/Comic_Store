package com.toth_almos.comicbookstore.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@AllArgsConstructor
@Getter
@Setter
public class ShopOrderDTO {
    private int userId;
    private String shippingAddress;
    private Date orderDate;
    private double totalPrice;
    private String status;

}
