package com.toth_almos.comicbookstore.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class OrderLineDTO {
    private int productId;
    private int shopOrderId;
    private int quantity;
}
