package com.javaproject.aaj.weekendwalkers.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javaproject.aaj.weekendwalkers.models.Club;
import com.javaproject.aaj.weekendwalkers.repos.ClubRepository;

@Service
public class ClubService {
	
	@Autowired
	private ClubRepository clubRepo;
	
	//Create
	public Club createClub(Club club) {
		return clubRepo.save(club);
	}
	
	//Read
	public List<Club> allClubs(){
		return clubRepo.findAll();
	}
	
	public Club findClub(Long id) {
		Optional<Club> club = clubRepo.findById(id);
		if(club.isPresent()) {
			return club.get();
		}else {
			return null;
		}
	}
	
	//Edit
	public Club update(Club club) {
		return clubRepo.save(club);
	}
	
	//Delete
	public void delete(Long id) {
		clubRepo.deleteById(id);
	}
}
