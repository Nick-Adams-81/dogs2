package com.example.server.repositories;

import com.example.server.models.Distributors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistributorsRepository extends JpaRepository<Distributors, Long> {
}
