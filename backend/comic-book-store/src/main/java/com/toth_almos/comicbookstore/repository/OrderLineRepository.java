package com.toth_almos.comicbookstore.repository;

import com.toth_almos.comicbookstore.model.OrderLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderLineRepository extends JpaRepository<OrderLine, Integer> {

    @Query("SELECT o FROM OrderLine o WHERE o.shopOrderId = givenShopOrderId")
    public List<OrderLine> findByShopOrderId(int givenShopOrderId);
}
