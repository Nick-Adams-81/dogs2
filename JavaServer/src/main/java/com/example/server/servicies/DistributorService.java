package com.example.server.servicies;

import com.example.server.models.Distributors;

import java.util.List;
import java.util.Optional;

public interface DistributorService {

    Distributors saveDistributor(Distributors distributors);

    List<Distributors> getAllDistributors();

    void deleteDistributors(Distributors id);

    Optional<Distributors> getOneDistributor(long id);
}
