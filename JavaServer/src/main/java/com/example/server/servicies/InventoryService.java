package com.example.server.servicies;

import com.example.server.models.Inventory;

import java.util.List;
import java.util.Optional;

public interface InventoryService {

    Inventory saveInventory(Inventory inventory);

    List<Inventory> getAllInventory();

    void deleteInventory(Inventory id);

    Optional<Inventory> getOneInventoryItem(long id);
}
