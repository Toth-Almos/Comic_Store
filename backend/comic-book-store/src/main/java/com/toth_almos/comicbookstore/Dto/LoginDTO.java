package com.toth_almos.comicbookstore.Dto;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class LoginDTO {
    private String email;
    private String password;

    //Getters and Setters:
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
