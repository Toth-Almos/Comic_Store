package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.model.ShopOrder;
import com.toth_almos.comicbookstore.Dto.ShopOrderDTO;
import com.toth_almos.comicbookstore.service.ShopOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/shop_order")
public class ShopOrderController {
    @Autowired
    private ShopOrderService shopOrderService;

    @PostMapping("/create")
    public ResponseEntity<?> createShopOrder(@RequestBody ShopOrderDTO shopOrderDTO) {
        int newShopOrderResponse = shopOrderService.createShopOrder(shopOrderDTO);
        if(newShopOrderResponse != -1) {
            return ResponseEntity.ok(newShopOrderResponse);
        }
        return new ResponseEntity<Integer>(newShopOrderResponse, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getOrdersForUser(@RequestParam int userId) {
        List<ShopOrder> gottenShopOrder = shopOrderService.getOrdersForUser(userId);
        if(gottenShopOrder != null) {
            return ResponseEntity.ok(gottenShopOrder);
        }
        return new ResponseEntity<String>("Could not get this user's orders!", HttpStatus.BAD_REQUEST);
    }
}
