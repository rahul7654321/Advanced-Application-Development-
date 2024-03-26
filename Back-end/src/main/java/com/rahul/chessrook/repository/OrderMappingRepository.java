package com.rahul.chessrook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rahul.chessrook.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
