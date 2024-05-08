package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.Dto.ComicDTO;
import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/comics")
public class ComicController {
    @Autowired
    private ComicService comicService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody ComicDTO comicDTO) {
        return comicService.addComic(comicDTO);
    }

    @GetMapping()
    public List<Comic> getAllComics() {
        return comicService.getAllComics();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comic> getComicById(@PathVariable("id") int id) {
        Comic comic = comicService.getComicById(id);
        if(comic == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(comic);
    }

    @GetMapping("/search/{name}")
    public List<Comic> getComicBySearch(@PathVariable("name") String name) {
        return comicService.getComicBySearch(name);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteComicById(@PathVariable("id") int id) {
        try {
            System.out.println("The given id was: " + id);
            comicService.deleteComicById(id);
        }
        catch (IllegalArgumentException e) {
            return new ResponseEntity<String>("The given Id was not acceptable!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<String>("Comic{" + id + "} was deleted!",HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> updateComic(@PathVariable("id") int id, @RequestBody ComicDTO comicDTO) {
        Comic comic = comicService.getComicById(id);
        if(comic == null) {
            return new ResponseEntity<>("Comic not found for this id: " + id, HttpStatus.BAD_REQUEST);
        }
        comic.setName(comicDTO.getName());
        comic.setPrice(comicDTO.getPrice());
        comic.setCreators(comicDTO.getCreators());
        comic.setReleaseYear(comicDTO.getReleaseYear());
        comic.setStudio(comicDTO.getStudio());
        comicService.updateComic(comic);

        return new ResponseEntity<>("Comic was successfully updated!", HttpStatus.OK);
    }
}
