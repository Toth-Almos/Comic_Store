package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.Dto.LoginDTO;
import com.toth_almos.comicbookstore.Dto.UserDTO;
import com.toth_almos.comicbookstore.response.LoginResponse;
import com.toth_almos.comicbookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/register")
    public String registerUser(@RequestBody UserDTO userDTO) {
        String id = userService.registerUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
