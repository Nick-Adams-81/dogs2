package com.example.server.controllers;


import com.example.server.models.ShoppingCart;
import com.example.server.servicies.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @GetMapping("/getAllShoppingCartItems")
    @ResponseBody
    public List<ShoppingCart> getallCartItems() {
        return shoppingCartService.getAllShoppingCartItems();
    }

    @GetMapping("/getOneCartItem/{id}")
    @ResponseBody
    public Optional<ShoppingCart> getOneCartItem(@PathVariable long id) {
        return shoppingCartService.getOneShoppingCartItem(id);
    }

    @PostMapping("/saveShoppingCartItem")
    @ResponseBody
    public String saveCartItem(@RequestBody ShoppingCart cart) {
        shoppingCartService.saveshoppingCart(cart);
        return "Shopping cart item saved!!!";
    }

    @DeleteMapping("/deleteOneCartItem/{id}")
    @ResponseBody
    public String deleteOneCartItem(@PathVariable ShoppingCart id) {
        shoppingCartService.deleteShoppingCartItem(id);
        return "Item Deleted!!!";
    }

    @DeleteMapping("/deleteAllCartItems")
    @ResponseBody
    public String deleteAllCartItems() {
        shoppingCartService.deleteAllItems();
        return "Cart Emptied!!!";
    }
}
