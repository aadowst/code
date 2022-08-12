package com.aadowst.dojosandninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadowst.dojosandninjas.models.Ninja;
import com.aadowst.dojosandninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
@Autowired
private NinjaRepository ninjaRepository;
	
// ========== Create / Update ===============

public Ninja save(Ninja ninja) {
	return ninjaRepository.save(ninja);
}

// ========== Read ==========================

public List<Ninja> getAll() {
	return (List<Ninja>) ninjaRepository.findAll();
}

public Ninja getOne(Long id) {
    // CODE AT BOTTOM REPLACES ALL OF THIS
	// Optional<Ninja> optNinja = ninjaRepository.findById(id);
	
	// if (optNinja.isPresent()) {
	// 	return optNinja.get();
	// } else {
	// 	return null;
	// }
    return ninjaRepository.findById(id).orElse(null);
}

// ========== Delete ========================

public void delete(Long id) {
	ninjaRepository.deleteById(id);
}
}
