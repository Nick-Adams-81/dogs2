package com.example.server.controllers;

import com.example.server.models.DentistsHateUs;
import com.example.server.servicies.DentistsHateUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class DentistsHateUsController {

    @Autowired
    private DentistsHateUsService dentistsHateUsService;

    @GetMapping("/getDentistsHateUsStock")
    @ResponseBody
    public List<DentistsHateUs> dentistsHateUs() {
        return dentistsHateUsService.getAllDentistsHateUsItems();
    }

    @GetMapping("/getDentistsHateUs/{id}")
    @ResponseBody
    public Optional<DentistsHateUs> getDentistsHateUsItem(@PathVariable long id) {
        return dentistsHateUsService.getOneDentistsHateUsItem(id);
    }

    @PostMapping("/saveDentistsHateUsItem")
    @ResponseBody
    public String saveDentistsHateUsItem(@RequestBody DentistsHateUs dentistsHateUs) {
        dentistsHateUsService.saveDentistsHateUsItem(dentistsHateUs);
        return "New Item added!!!";
    }

    @DeleteMapping("deleteDentistsHateUsItem/{id}")
    @ResponseBody
    public String deleteDentistsHateUsItem(@PathVariable DentistsHateUs id) {
        dentistsHateUsService.deleteDentistsHateUsItem(id);
        return "Item deleted!!!";
    }
}
