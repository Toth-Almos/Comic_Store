package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.ComicDTO;
import com.toth_almos.comicbookstore.model.Comic;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ComicService {
    public ResponseEntity<?> addComic(ComicDTO comicDTO);
    public List<Comic> getAllComics();
    public Comic getComicById(int givenID);
    public List<Comic> getComicBySearch(String name);
    public void deleteComicById(int givenID);
    public ResponseEntity<?> updateComic(Comic comic);
}
