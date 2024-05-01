package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.OrderLineDTO;
import com.toth_almos.comicbookstore.Dto.ShopOrderDTO;
import com.toth_almos.comicbookstore.model.OrderLine;
import com.toth_almos.comicbookstore.model.ShopOrder;
import com.toth_almos.comicbookstore.repository.OrderLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderLineService {
    @Autowired
    private OrderLineRepository orderLineRepository;

    public OrderLine createOrderLine(OrderLineDTO orderLineDTO) {
        if(orderLineDTO != null) {
            OrderLine newOrderLine = new OrderLine(orderLineDTO.getProductId(), orderLineDTO.getShopOrderId(), orderLineDTO.getQuantity());
            orderLineRepository.save(newOrderLine);
            return newOrderLine;
        }
        return null;
    }

    public List<OrderLine> getOrderLineFromShopOrder(int shopOrderId) {
        List<OrderLine> orderLines = orderLineRepository.findByShopOrderId(shopOrderId);
        return orderLines;
    }
}
