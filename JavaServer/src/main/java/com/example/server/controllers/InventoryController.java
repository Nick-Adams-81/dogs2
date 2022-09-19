package com.example.server.controllers;

import com.example.server.models.Inventory;
import com.example.server.servicies.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/getItems")
    @ResponseBody
    public List<Inventory> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/item/{id}")
    @ResponseBody
    public Optional<Inventory> getOneInventoryItem(@PathVariable long id) {
        return inventoryService.getOneInventoryItem(id);
    }

    @PostMapping("/saveItem")
    @ResponseBody
    public String addItem(@RequestBody Inventory inventory) {
        inventoryService.saveInventory(inventory);
        return "New Item added!";
    }

    @DeleteMapping("deleteItem/{id}")
    @ResponseBody
    public String deleteItem(@PathVariable Inventory id) {
        inventoryService.deleteInventory(id);
        return "Item deleted!";
    }

}
