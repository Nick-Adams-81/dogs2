package com.example.server.servicies;

import com.example.server.models.Distributors;
import com.example.server.repositories.DistributorsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class DistributorsAPI implements DistributorsService {
    @Autowired
    private DistributorsRepository distributorDao;

    @Override
    public Distributors saveDistributor(Distributors distributors) {
        return distributorDao.save(distributors);
    }

    @Override
    public List<Distributors> getAllDistributors() {
        return distributorDao.findAll();
    }

    @Override
    public void deleteDistributors(Distributors id) {
        distributorDao.delete(id);

    }

    @Override
    public Optional<Distributors> getOneDistributor(long id) {
        return distributorDao.findById(id);
    }
}
