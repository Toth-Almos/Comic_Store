package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.model.Comic;
import java.util.List;

public interface ComicService {
    public void saveComic(Comic comic);
    public List<Comic> getAllComics();
    public Comic getComicById(int givenID);
    public Comic getComicBySearch(String name);
}
