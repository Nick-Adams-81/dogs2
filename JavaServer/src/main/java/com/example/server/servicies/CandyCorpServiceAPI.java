package com.example.server.servicies;

import com.example.server.models.CandyCorp;
import com.example.server.repositories.CandyCorpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandyCorpServiceAPI implements CandyCorpService{

    @Autowired
    private CandyCorpRepository candyCorpDao;

    @Override
    public CandyCorp saveCandyCorp(CandyCorp candyCorp) {
        return candyCorpDao.save(candyCorp);
    }

    @Override
    public List<CandyCorp> getAllCandyCorp() {
        return candyCorpDao.findAll();
    }

    @Override
    public void deleteCandyCorpItem(CandyCorp id) {
        candyCorpDao.delete(id);
    }

    @Override
    public Optional<CandyCorp> getOneCandyCorpItem(long id) {
        return candyCorpDao.findById(id);
    }
}
