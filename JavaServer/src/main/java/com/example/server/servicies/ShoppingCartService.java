package com.example.server.servicies;

import com.example.server.models.ShoppingCart;

import java.util.List;
import java.util.Optional;

public interface ShoppingCartService {

    ShoppingCart saveshoppingCart(ShoppingCart shoppingCart);

    List<ShoppingCart> getAllShoppingCartItems();

    void deleteAllItems();

    void deleteShoppingCartItem(ShoppingCart id);

    Optional<ShoppingCart> getOneShoppingCartItem(long id);
}
