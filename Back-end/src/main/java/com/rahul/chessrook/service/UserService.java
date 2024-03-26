package com.rahul.chessrook.service;

import java.util.List;

import com.rahul.chessrook.dto.request.UserRequest;
import com.rahul.chessrook.dto.response.CountResponse;
import com.rahul.chessrook.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
