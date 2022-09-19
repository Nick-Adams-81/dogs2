package com.example.server.servicies;

import com.example.server.models.DentistsHateUs;
import com.example.server.repositories.DentistsHateUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DentistsHateUsServiceAPI implements DentistsHateUsService{

    @Autowired
    private DentistsHateUsRepository dentistsHateUsDao;

    @Override
    public DentistsHateUs saveDentistsHateUsItem(DentistsHateUs dentistsHateUs) {
        return dentistsHateUsDao.save(dentistsHateUs);
    }

    @Override
    public List<DentistsHateUs> getAllDentistsHateUsItems() {
        return dentistsHateUsDao.findAll();
    }

    @Override
    public void deleteDentistsHateUsItem(DentistsHateUs id) {
        dentistsHateUsDao.delete(id);
    }

    @Override
    public Optional<DentistsHateUs> getOneDentistsHateUsItem(long id) {
        return dentistsHateUsDao.findById(id);
    }
}
