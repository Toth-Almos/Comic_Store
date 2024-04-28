package com.toth_almos.comicbookstore.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class LoginResponse {
    private String message;
    private Boolean status;
    private String userName;
    private String email;

    //Getters and Setters:
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public Boolean getStatus() { return status; }
    public void setStatus(Boolean status) { this.status = status; }
    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
