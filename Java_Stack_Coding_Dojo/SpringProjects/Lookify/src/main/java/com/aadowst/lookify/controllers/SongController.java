package com.aadowst.lookify.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aadowst.lookify.models.Song;
import com.aadowst.lookify.services.SongService;

@Controller
public class SongController {

	@Autowired
	SongService songService;
	
	@RequestMapping("/")
	public String index() {
		
		return "index.jsp";
	}
	
	@GetMapping("/dashboard")
	public String dashboard(Model model) {
		List<Song> listOfSongs = songService.getAll();
		model.addAttribute("listOfSongs", listOfSongs);
		return "dashboard.jsp";
	}
	
	@GetMapping("/songs/new")
	public String newSong(@ModelAttribute("song") Song song) {
				return "newSong.jsp";
	}

	@PostMapping("/songs/create")
	public String create(@Valid @ModelAttribute("song") Song song, BindingResult result) {
		if(result.hasErrors()) {
			return "newSong.jsp";
		}
		songService.save(song);
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/songs/{id}")
	public String showOne(Model model, @PathVariable("id") long id) {

		Song song = songService.getOne(id);
		model.addAttribute("song", song);
		return "showOne.jsp";
	}
	
	@DeleteMapping("/songs/{id}/destroy")
	public String destroy(@PathVariable("id") Long id) {
		songService.delete(id);
		return "redirect:/dashboard";
	}
	
	@GetMapping("search/top-ten")
	public String topTen(Model model) {
		List<Song> listOfSongs = songService.getTopTen();
		model.addAttribute("listOfSongs", listOfSongs);
		return "dashboard.jsp";
}
	
	@GetMapping("/search/")
	public String search(Model model, @RequestParam(value="artist") String artist) {
		List<Song> listOfSongs = songService.songsByArtist(artist);
		model.addAttribute("listOfSongs", listOfSongs);		
		return "search.jsp";
	}
	
	
}