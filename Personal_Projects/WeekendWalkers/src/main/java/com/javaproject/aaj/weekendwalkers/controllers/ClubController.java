package com.javaproject.aaj.weekendwalkers.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.javaproject.aaj.weekendwalkers.models.Club;
import com.javaproject.aaj.weekendwalkers.models.User;
import com.javaproject.aaj.weekendwalkers.services.ClubService;
import com.javaproject.aaj.weekendwalkers.services.UserService;

@Controller
public class ClubController {

	@Autowired
	private ClubService clubServ;

	@Autowired
	private UserService userServ;

	// create
	@PostMapping("/clubs/new")
	public String createClub(@Valid @ModelAttribute("club") Club club, BindingResult result, HttpSession session) {
		if (result.hasErrors()) {
			return "create_club.jsp";
		}
		Long id = (Long) session.getAttribute("user_id");
		User user = userServ.getOne(id);
		club.setOrganizer(user);
		clubServ.createClub(club);
		List<Club> userClub = user.getClubs();
		userClub.add(club);
		user.setClubs(userClub);
		userServ.update(user);
		System.out.println(result);

		return "redirect:/clubs";
	}

	// Read
	@GetMapping("/clubs/new")
	public String newclub(@ModelAttribute("club") Club club, Model model, HttpSession session) {
		Long id = (Long) session.getAttribute("user_id");
		User user = userServ.getOne(id);
		model.addAttribute("user", user);
		return "create_club.jsp";
	}

	@GetMapping("/clubs")
	public String showClubs(Model model, HttpSession session) {
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("clubs", clubServ.allClubs());
		model.addAttribute("user", user);
		return "view_clubs.jsp";
	}

	@GetMapping("/clubs/{id}")

	public String oneClub(@PathVariable("id") Long id, Model model, HttpSession session) {
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("club", clubServ.findClub(id));
		model.addAttribute("user", user);
		return "one_club.jsp";
	}

	
	@PostMapping("/club/{id}/request")
	public String request(HttpSession session, @PathVariable("id") Long id) {
		System.out.println("hello");
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		Club club = clubServ.findClub(id);
		
		List <User> clubs_request = club.getUserRequest();
		clubs_request.add(user);
		club.setUserRequest(clubs_request);

		clubServ.update(club);
		
		return "redirect:/clubs/" + id;
	}
	
	@GetMapping("/clubs/{clubId}/{userId}/accept")	
	public String accept(HttpSession session, @PathVariable("clubId") Long clubId, @PathVariable("userId") Long userId, Model model) {
		
		User user = userServ.getOne(userId);
		Club club = clubServ.findClub(clubId);
		List <User> clubs_request = club.getUserRequest();
		
		System.out.println(clubs_request);
		//removing from request list
		clubs_request.remove(user);
		List <User> users_in_club = club.getUsers();
		System.out.println(users_in_club);
		users_in_club.add(user);
		club.setUserRequest(clubs_request);
		club.setUsers(users_in_club);
		
		System.out.println(club.getUserRequest());
		System.out.println(club.getUsers());
		clubServ.update(club);
		
		
		return "redirect:/clubs/" + clubId;
	}
	
	@GetMapping("/clubs/{clubId}/{userId}/deny")	
	public String denyRequest(HttpSession session, @PathVariable("clubId") Long clubId, @PathVariable("userId") Long userId, Model model) {
		User user = userServ.getOne(userId);
		Club club = clubServ.findClub(clubId);
		List <User> clubs_request = club.getUserRequest();
		//removing from request list
		clubs_request.remove(user);
		club.setUserRequest(clubs_request);
		clubServ.update(club);
		
		return "redirect:/clubs" + clubId;
	}

	@GetMapping("/clubs/{id}/edit")
	public String editClub(@PathVariable("id") Long id, Model model, HttpSession session) {
		Club club = clubServ.findClub(id);
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		if (user.getId() != club.getOrganizer().getId()) {
			return "redirect:/clubs/" + id;
		}
		model.addAttribute("club", club);
		return "edit_club.jsp";
	}

	// Edit
	@PutMapping("/clubs/{id}/edit")
	public String updateClub(@PathVariable("id") Long id, @Valid @ModelAttribute("club") Club club,
			BindingResult result, HttpSession session) {
		Club oneClub = clubServ.findClub(id);
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		if (user.getId() != oneClub.getOrganizer().getId()) {
			return "redirect:/clubs/" + id;
		}
		if (result.hasErrors()) {
			return "edit_club.jsp";
		} else {
			clubServ.update(club);
		}
		return "redirect:/events";

	}

	// Delete
	@GetMapping("/clubs/{id}/delete")
	public String deleteClub(@PathVariable("id") Long id, HttpSession session) {
		Club club = clubServ.findClub(id);
		User user = userServ.getOne((Long) session.getAttribute("user_id"));
		if (user.getId() != club.getOrganizer().getId()) {
			return "redirect:/clubs/" + id;
		}
		clubServ.delete(id);
		return "redirect:/events";
	}

}
