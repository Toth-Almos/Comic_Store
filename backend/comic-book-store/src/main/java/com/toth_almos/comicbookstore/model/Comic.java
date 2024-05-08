package com.toth_almos.comicbookstore.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "comic")
public class Comic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private double price;
    private String creators;
    private int releaseYear;
    private String studio;

    public Comic(String name, double price, String creators, int releaseYear, String studio) {
        this.name = name;
        this.price = price;
        this.creators = creators;
        this.releaseYear = releaseYear;
        this.studio = studio;
    }

    //Getters & Setters:
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getCreators() {
        return creators;
    }
    public void setCreators(String creators) {
        this.creators = creators;
    }
    public int getReleaseYear() {
        return releaseYear;
    }
    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }
    public String getStudio() {
        return studio;
    }
    public void setStudio(String studio) {
        this.studio = studio;
    }
}
