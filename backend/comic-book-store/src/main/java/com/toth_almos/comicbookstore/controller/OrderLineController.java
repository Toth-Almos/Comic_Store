package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.Dto.OrderLineDTO;
import com.toth_almos.comicbookstore.model.OrderLine;
import com.toth_almos.comicbookstore.service.OrderLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/v1/order_line")
public class OrderLineController {
    @Autowired
    private OrderLineService orderLineService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrderLine(@RequestBody OrderLineDTO orderLineDTO) {
        OrderLine newOrderLine = orderLineService.createOrderLine(orderLineDTO);
        if(newOrderLine != null) {
            return ResponseEntity.ok(newOrderLine);
        }
        return new ResponseEntity<String>("Could not create OrderLine entity!", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/from_shop_order")
    public ResponseEntity<?> getOrderLineFromShopOrder(@RequestParam int shopOrderId) {
        List<OrderLine> orderLines = orderLineService.getOrderLineFromShopOrder(shopOrderId);
        if(orderLines != null) {
            return ResponseEntity.ok(orderLines);
        }
        return ResponseEntity.notFound().build();
    }
}
