package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.LoginDTO;
import com.toth_almos.comicbookstore.Dto.UserDTO;
import com.toth_almos.comicbookstore.response.LoginResponse;

public interface UserService {
    String registerUser(UserDTO userDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
}
