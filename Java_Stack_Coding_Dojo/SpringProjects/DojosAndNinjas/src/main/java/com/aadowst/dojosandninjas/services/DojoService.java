package com.aadowst.dojosandninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadowst.dojosandninjas.models.Dojo;
import com.aadowst.dojosandninjas.repositories.DojoRepository;

@Service
public class DojoService {
@Autowired
private DojoRepository dojoRepository;
	
// ========== Create / Update ===============

public Dojo save(Dojo dojo) {
	return dojoRepository.save(dojo);
}

// ========== Read ==========================

public List<Dojo> getAll() {
	return (List<Dojo>) dojoRepository.findAll();
}

public Dojo getOne(Long id) {
    // CODE AT BOTTOM REPLACES ALL OF THIS
	// Optional<Dojo> optDojo = dojoRepository.findById(id);
	
	// if (optDojo.isPresent()) {
	// 	return optDojo.get();
	// } else {
	// 	return null;
	// }
    return dojoRepository.findById(id).orElse(null);
}

// ========== Delete ========================

public void delete(Long id) {
	dojoRepository.deleteById(id);
}

}
