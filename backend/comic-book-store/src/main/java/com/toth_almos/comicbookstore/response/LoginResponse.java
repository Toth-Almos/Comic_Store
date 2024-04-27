package com.toth_almos.comicbookstore.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class LoginResponse {
    private String message;
    private Boolean status;

    //Getters and Setters:
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public Boolean getStatus() { return status; }
    public void setStatus(Boolean status) { this.status = status; }
}
