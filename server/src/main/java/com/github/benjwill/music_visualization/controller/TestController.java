package com.github.benjwill.music_visualization.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TestController is a simple Spring Boot REST controller
 * to verify that the backend is running correctly.
 */
@RestController
public class TestController {

    /**
     * GET /hello
     * 
     * @return a simple confirmation string
     */
    @GetMapping("/hello")
    public String hello() {
        return "Backend is running!";
    }
}