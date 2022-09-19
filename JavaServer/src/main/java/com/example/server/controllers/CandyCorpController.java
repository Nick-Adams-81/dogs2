package com.example.server.controllers;


import com.example.server.models.CandyCorp;
import com.example.server.servicies.CandyCorpService;
import com.example.server.servicies.CandyCorpServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class CandyCorpController {

    @Autowired
    private CandyCorpService candyCorpService;

    @GetMapping("/getCandyCorpStock")
    @ResponseBody
    public List<CandyCorp> getAllCandy() {
        return candyCorpService.getAllCandyCorp();
    }

    @GetMapping("/getCandyCorpStock/{id}")
    @ResponseBody
    public Optional<CandyCorp> getOneCandyCorpItem(@PathVariable long id) {
        return candyCorpService.getOneCandyCorpItem(id);
    }

    @PostMapping("/saveCandyCorpItem")
    @ResponseBody
    public String saveCandyCorpItem(@RequestBody CandyCorp candyCorp) {
        candyCorpService.saveCandyCorp(candyCorp);
        return "New Candy Corp Item saved!";
    }

    @DeleteMapping("/deleteCandyCorpItem/{id}")
    @ResponseBody
    public String deleteCandyCorpItem(@PathVariable CandyCorp id) {
        candyCorpService.deleteCandyCorpItem(id);
        return "Item Deleted!";
    }

}
