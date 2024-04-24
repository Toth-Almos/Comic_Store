package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.metadata.HsqlTableMetaDataProvider;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/comics")
public class ComicController {
    @Autowired
    private ComicService comicService;

    @PostMapping("/add")
    public String add(@RequestBody Comic comic) {
        comicService.saveComic(comic);
        return "New Comic is added";
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
}
