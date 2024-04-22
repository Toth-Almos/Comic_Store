package com.toth_almos.comicbookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ComicBookStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComicBookStoreApplication.class, args);
	}

//	@CrossOrigin(origins = "http://localhost:3000")
//	@GetMapping("/test")
//	public String test(@RequestParam(value = "text", defaultValue = "default text") String text) {
//		return String.format("The given text was %s", text);
//	}
}
