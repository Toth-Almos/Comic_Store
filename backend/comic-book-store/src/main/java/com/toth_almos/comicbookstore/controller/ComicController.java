package com.toth_almos.comicbookstore.controller;

import com.toth_almos.comicbookstore.model.Comic;
import com.toth_almos.comicbookstore.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.metadata.HsqlTableMetaDataProvider;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/comic")
@CrossOrigin(origins = "*")
public class ComicController {
    @Autowired
    private ComicService comicService;

    @PostMapping("/add")
    public String add(@RequestBody Comic comic) {
        comicService.saveComic(comic);
        return "New Comic is added";
    }

    @GetMapping("/getAll")
    public List<Comic> getAllComics() {
        /*try {
            if(true) {
                throw new RuntimeException(comicService.getAllComics().toString());
            }
        }
        catch(RuntimeException exception) {
            System.out.println(exception.getMessage());
        }*/
        return comicService.getAllComics();
    }
}
