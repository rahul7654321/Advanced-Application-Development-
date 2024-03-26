package com.rahul.chessrook.service;

import com.rahul.chessrook.dto.request.AuthenticationRequest;
import com.rahul.chessrook.dto.request.RegisterRequest;
import com.rahul.chessrook.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
