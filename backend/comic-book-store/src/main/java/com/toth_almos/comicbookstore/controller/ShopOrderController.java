package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.model.ShopOrder;
import com.toth_almos.comicbookstore.Dto.ShopOrderDTO;
import com.toth_almos.comicbookstore.service.ShopOrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/shop_order")
public class ShopOrderController {
    private ShopOrderService shopOrderService;

    @PostMapping("/create")
    public ResponseEntity<?> createShopOrder(@RequestBody ShopOrderDTO shopOrderDTO) {
        ShopOrder newShopOrder = shopOrderService.createShopOrder(shopOrderDTO);
        if(newShopOrder != null) {
            return ResponseEntity.ok(newShopOrder);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getOrdersForUser(@RequestParam int userId) {
        List<ShopOrder> gottenShopOrder = shopOrderService.getOrdersForUser(userId);
        if(gottenShopOrder != null) {
            return ResponseEntity.ok(gottenShopOrder);
        }
        return ResponseEntity.notFound().build();
    }
}
