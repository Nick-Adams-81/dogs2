package com.example.server.controllers;

import com.example.server.models.TheSweetSuite;
import com.example.server.servicies.TheSweetSuiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class TheSweetSuiteController {

    @Autowired
    private TheSweetSuiteService sweetSuiteService;

    @GetMapping("/getSweetSuiteStock")
    @ResponseBody
    public List<TheSweetSuite> getAllSweetSuiteStock() {
        return sweetSuiteService.getAllSweetSuite();
    }

    @GetMapping("/getSweetSuite/{id}")
    @ResponseBody
    public Optional<TheSweetSuite> getOneSweetSuite(@PathVariable long id) {
        return sweetSuiteService.getOneSweetSuiteItem(id);
    }

    @PostMapping("/saveSweetSuite")
    @ResponseBody
    public String saveSweetSuiteItem(@RequestBody TheSweetSuite sweetSuite) {
        sweetSuiteService.saveSweetSuite(sweetSuite);
        return "New Items added!";
    }

    @DeleteMapping("/deleteSweetSuiteItem/{id}")
    @ResponseBody
    public String deleteSweetSuiteItem(@PathVariable TheSweetSuite id) {
        sweetSuiteService.deleteTheSweetSuiteItem(id);
        return "Item Deleted!";
    }
}
