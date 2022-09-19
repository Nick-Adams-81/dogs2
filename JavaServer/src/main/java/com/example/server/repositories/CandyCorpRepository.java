package com.example.server.repositories;

import com.example.server.models.CandyCorp;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CandyCorpRepository extends JpaRepository<CandyCorp, Long> {
}
