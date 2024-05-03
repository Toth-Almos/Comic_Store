package com.toth_almos.comicbookstore.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class LoginResponse {
    private String message;
    private Boolean status;
    private String userName;
    private String email;
    private int userId;
}
