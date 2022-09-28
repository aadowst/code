package com.javaproject.aaj.weekendwalkers.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.javaproject.aaj.weekendwalkers.models.Club;

@Repository
public interface ClubRepository extends CrudRepository<Club, Long>{
	List<Club> findAll();
}
