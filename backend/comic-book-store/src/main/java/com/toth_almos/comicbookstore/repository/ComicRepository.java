package com.toth_almos.comicbookstore.repository;

import com.toth_almos.comicbookstore.model.Comic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ComicRepository extends JpaRepository<Comic, Integer> {
    //TODO: findByName() query
}
