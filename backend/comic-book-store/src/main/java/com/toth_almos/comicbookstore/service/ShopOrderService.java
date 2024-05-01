package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.ShopOrderDTO;
import com.toth_almos.comicbookstore.model.ShopOrder;
import com.toth_almos.comicbookstore.repository.ShopOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class ShopOrderService {
    @Autowired
    private ShopOrderRepository shopOrderRepository;

    public ShopOrder createShopOrder(ShopOrderDTO shopOrderDTO) {
        if(shopOrderDTO != null) {
            ShopOrder newShopOrder = new ShopOrder(shopOrderDTO.getUserId(), shopOrderDTO.getShippingAddress(), shopOrderDTO.getOrderDate(), shopOrderDTO.getTotalPrice(), shopOrderDTO.getStatus());
            shopOrderRepository.save(newShopOrder);
            return newShopOrder;
        }
        return null;
    }

    public List<ShopOrder> getOrdersForUser(int userId) {
        List<ShopOrder> gottenShopOrders = shopOrderRepository.findByUserId(userId);
        return gottenShopOrders;
    }
}
