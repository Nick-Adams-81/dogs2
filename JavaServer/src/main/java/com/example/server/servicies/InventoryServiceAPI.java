package com.example.server.servicies;

import com.example.server.models.Inventory;
import com.example.server.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryServiceAPI implements InventoryService{
    @Autowired
    private InventoryRepository inventoryDao;

    @Override
    public Inventory saveInventory(Inventory inventory) {
        return inventoryDao.save(inventory);
    }

    @Override
    public List<Inventory> getAllInventory() {
        return inventoryDao.findAll();
    }

    @Override
    public void deleteInventory(Inventory id) {
        inventoryDao.delete(id);
    }

    @Override
    public Optional<Inventory> getOneInventoryItem(long id) {
        return inventoryDao.findById(id);
    }
}
