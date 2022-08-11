package com.aadowst.lookify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aadowst.lookify.models.Song;

@Repository
public interface SongRepository extends CrudRepository<Song, Long>{

	List<Song> findAllByOrderByRatingAsc();
	List<Song> findTop10ByOrderByRatingDesc();
	
	@Query(value = "SELECT * FROM  songs ORDER BY rating DESC LIMIT 10", nativeQuery = true)
	List<Song> getTopTen();
	
	public List<Song> findAllByArtist(String artist);
}
