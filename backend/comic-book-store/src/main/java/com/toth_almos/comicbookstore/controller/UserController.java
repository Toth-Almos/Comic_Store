package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.Dto.UserDTO;
import com.toth_almos.comicbookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
}
