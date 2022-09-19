package com.example.server.servicies;


import com.example.server.models.TheSweetSuite;
import com.example.server.repositories.TheSweetSuiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TheSweetSuiteServiceAPI implements TheSweetSuiteService{
    @Autowired
    private TheSweetSuiteRepository sweetSuiteDao;

    @Override
    public TheSweetSuite saveSweetSuite(TheSweetSuite sweetSuite) {
        return sweetSuiteDao.save(sweetSuite);
    }

    @Override
    public List<TheSweetSuite> getAllSweetSuite() {
        return sweetSuiteDao.findAll();
    }

    @Override
    public void deleteTheSweetSuiteItem(TheSweetSuite id) {
        sweetSuiteDao.delete(id);

    }

    @Override
    public Optional<TheSweetSuite> getOneSweetSuiteItem(long id) {
        return sweetSuiteDao.findById(id);
    }

}
