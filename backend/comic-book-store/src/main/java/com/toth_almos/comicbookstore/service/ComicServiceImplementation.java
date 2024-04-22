package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class ComicServiceImplementation implements ComicService {

    @Autowired
    private ComicRepository comicRepository;

    @Override
    public Comic saveComic(Comic comic) {
        return comicRepository.save(comic);
    }

    @Override
    public List<Comic> getAllComics() {
        return comicRepository.findAll();
    }
}
