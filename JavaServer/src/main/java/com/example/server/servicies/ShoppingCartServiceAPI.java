package com.example.server.servicies;

import com.example.server.models.ShoppingCart;
import com.example.server.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartServiceAPI implements  ShoppingCartService{
    @Autowired
    private ShoppingCartRepository shoppingCartDao;

    @Override
    public ShoppingCart saveshoppingCart(ShoppingCart shoppingCart) {
        return shoppingCartDao.save(shoppingCart);
    }

    @Override
    public List<ShoppingCart> getAllShoppingCartItems() {
        return shoppingCartDao.findAll();
    }

    @Override
    public void deleteAllItems() {
        shoppingCartDao.deleteAll();
    }

    @Override
    public void deleteShoppingCartItem(ShoppingCart id) {
        shoppingCartDao.delete(id);
    }

    @Override
    public Optional<ShoppingCart> getOneShoppingCartItem(long id) {
        return shoppingCartDao.findById(id);
    }
}
