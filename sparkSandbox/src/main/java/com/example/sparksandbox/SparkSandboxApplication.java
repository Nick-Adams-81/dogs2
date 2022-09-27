package com.example.sparksandbox;

import com.example.sparksandbox.repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import static spark.Spark.get;

@SpringBootApplication
public class SparkSandboxApplication {


    public static void main(String[] args) {

        UserRepository userDao;
        SpringApplication.run(SparkSandboxApplication.class, args);
        get("/hello", (req, res) -> "Hello");
    }

}
