package com.example.server.servicies;

import com.example.server.models.TheSweetSuite;

import java.util.List;
import java.util.Optional;

public interface TheSweetSuiteService {

    TheSweetSuite saveSweetSuite(TheSweetSuite sweetSuite);

    List<TheSweetSuite> getAllSweetSuite();

    void deleteTheSweetSuiteItem(TheSweetSuite id);

    Optional<TheSweetSuite> getOneSweetSuiteItem(long id);




}
