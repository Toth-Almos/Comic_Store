package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.ComicDTO;
import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class ComicServiceImplementation implements ComicService {
    @Autowired
    private ComicRepository comicRepository;

    @Override
    public ResponseEntity<?> addComic(ComicDTO comicDTO) {
        Comic newComic = new Comic(comicDTO.getName(), comicDTO.getPrice(), comicDTO.getCreators(), comicDTO.getReleaseYear(), comicDTO.getStudio());
        if(newComic.getName() != null || newComic.getPrice() != 0 || newComic.getReleaseYear() != 0) {
            comicRepository.save(newComic);
            return ResponseEntity.ok(newComic);
        }
        return new ResponseEntity<String>("Adding new Comic failed, due to unacceptable parameters!", HttpStatus.BAD_REQUEST);
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

    @Override
    public void deleteComicById(int givenID) {
        comicRepository.deleteById(givenID);
    }


}
