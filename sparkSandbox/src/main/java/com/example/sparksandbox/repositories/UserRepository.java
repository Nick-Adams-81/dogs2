package com.example.sparksandbox.repositories;

import com.example.sparksandbox.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
