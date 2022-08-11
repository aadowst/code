package com.aadowst.lookify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadowst.lookify.models.Song;
import com.aadowst.lookify.repository.SongRepository;

@Service
public class SongService {

@Autowired
private SongRepository songRepository;
	

// ========== Create / Update ===============

public Song save(Song song) {
	return songRepository.save(song);
}

// ========== Read ==========================

public List<Song> getAll() {
	return (List<Song>) songRepository.findAll();
}

public List<Song> getTopTen(){
	return (List<Song>) songRepository.getTopTen();
}

public List<Song> songsByArtist(String artist){
	return (List<Song>) songRepository.findAllByArtist(artist);
}


public Song getOne(Long id) {
	Optional<Song> optSong = songRepository.findById(id);
	
	if (optSong.isPresent()) {
		return optSong.get();
	} else {
		return null;
	}
}

// ========== Delete ========================

public void delete(Long id) {
	songRepository.deleteById(id);
}
}
