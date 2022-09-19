package com.example.server.servicies;

import com.example.server.models.DentistsHateUs;

import java.util.List;
import java.util.Optional;

public interface DentistsHateUsService {

    DentistsHateUs saveDentistsHateUsItem(DentistsHateUs dentistsHateUs);

    List<DentistsHateUs> getAllDentistsHateUsItems();

    void deleteDentistsHateUsItem(DentistsHateUs id);

    Optional<DentistsHateUs> getOneDentistsHateUsItem(long id);
}
