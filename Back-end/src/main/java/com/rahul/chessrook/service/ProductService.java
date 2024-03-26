package com.rahul.chessrook.service;

import java.util.List;

import com.rahul.chessrook.dto.request.ProductRequest;
import com.rahul.chessrook.dto.response.CountResponse;
import com.rahul.chessrook.dto.response.ProductResponse;
import com.rahul.chessrook.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
