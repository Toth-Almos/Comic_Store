package com.toth_almos.comicbookstore.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ComicDTO {
    private String name;
    private double price;
    private String creators;
    private int releaseYear;
    private String studio;


}
