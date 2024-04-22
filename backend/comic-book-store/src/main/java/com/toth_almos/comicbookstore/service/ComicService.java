package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.model.Comic;
import java.util.List;

public interface ComicService {
    public Comic saveComic(Comic comic);
    public List<Comic> getAllComics();
}
