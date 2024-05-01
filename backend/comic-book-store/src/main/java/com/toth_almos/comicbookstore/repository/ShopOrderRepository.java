package com.toth_almos.comicbookstore.repository;

import com.toth_almos.comicbookstore.model.ShopOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopOrderRepository extends JpaRepository<ShopOrder, Integer> {

    @Query("SELECT o FROM ShopOrder o WHERE o.userId = givenUserId")
    List<ShopOrder> findByUserId(int givenUserId);
}
