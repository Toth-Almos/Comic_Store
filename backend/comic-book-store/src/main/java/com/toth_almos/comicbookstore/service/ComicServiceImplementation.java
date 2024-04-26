package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class ComicServiceImplementation implements ComicService {
    @Autowired
    private ComicRepository comicRepository;

    @Override
    public void saveComic(Comic comic) {
        comicRepository.save(comic);
    }

    @Override
    public List<Comic> getAllComics() {
        return comicRepository.findAll();
    }

    @Override
    public Comic getComicById(int givenID) {
        if(comicRepository.findById(givenID).isPresent()) {
            return comicRepository.findById(givenID).get();
        }
        return null;
    }

    @Override
    public List<Comic> getComicBySearch(String name) {
        return comicRepository.findByName(name.toLowerCase());
    }
}
