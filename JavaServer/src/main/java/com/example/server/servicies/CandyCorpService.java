package com.example.server.servicies;

import com.example.server.models.CandyCorp;

import java.util.List;
import java.util.Optional;

public interface CandyCorpService {

    CandyCorp saveCandyCorp(CandyCorp candyCorp);

    List<CandyCorp> getAllCandyCorp();

    void deleteCandyCorpItem(CandyCorp id);

    Optional<CandyCorp> getOneCandyCorpItem(long id);
}
