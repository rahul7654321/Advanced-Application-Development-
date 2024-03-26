package com.rahul.chessrook.service;

import java.util.List;

import com.rahul.chessrook.dto.request.OrderRequest;
import com.rahul.chessrook.dto.response.CountResponse;
import com.rahul.chessrook.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}
