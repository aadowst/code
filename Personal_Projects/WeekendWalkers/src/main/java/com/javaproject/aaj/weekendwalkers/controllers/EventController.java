package com.javaproject.aaj.weekendwalkers.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;
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

import com.javaproject.aaj.weekendwalkers.models.Club;
import com.javaproject.aaj.weekendwalkers.models.Event;
import com.javaproject.aaj.weekendwalkers.models.User;
import com.javaproject.aaj.weekendwalkers.services.ClubService;
import com.javaproject.aaj.weekendwalkers.services.EventService;
import com.javaproject.aaj.weekendwalkers.services.UserService;

@Controller
@RequestMapping("/events")
public class EventController {
	@Autowired
	private EventService eventService;
	@Autowired
	private UserService userService;
	@Autowired
	private ClubService clubService;

//	CREATE
	@GetMapping("/new")
	public String newEvent(Model model, @ModelAttribute("event") Event event, HttpSession session) {
		if (session.getAttribute("user_id") != null) {
			User user = userService.getOne((Long) session.getAttribute("user_id"));
			model.addAttribute("user", user);
			List<Club> joinedClubs = user.getClubs();
			model.addAttribute("joinedClubs", joinedClubs);
		}
		return "create_event.jsp";
	}

	@PostMapping("/create")
	public String createEvent(HttpSession session, Model model, @Valid @ModelAttribute("event") Event event,
			BindingResult result) {
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		if (result.hasErrors()) {

			model.addAttribute("user", user);
			return "create_event.jsp";
		}
		eventService.save(event);
		List<Event> userEvent = user.getEventsAttended();
		userEvent.add(event);
		user.setEventsAttended(userEvent);
		userService.update(user);
		return "redirect:/events/" + event.getId();
	}
	
	@PostMapping("/rsvp/{id}")
	public String rsvp(HttpSession session, @PathVariable("id") Long id, @RequestParam(value="rsvp", required = false) Boolean rsvp, Model model) {
		//check to see if user clicked the checkbox
		if (rsvp == null) {
			return "redirect:/events/" + id;
		}
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);
		System.out.println("test");
		
		Event event = eventService.getOne(id);
		List <User> rsvps = event.getAttendees();
		rsvps.add(user);
		event.setAttendees(rsvps);
		eventService.save(event);
		return "redirect:/events";
	}

//	READ

	@GetMapping("")
	public String showAllEvents(Model model, HttpSession session) {
		if (session.getAttribute("user_id") != null) {
			User user = userService.getOne((Long) session.getAttribute("user_id"));
			model.addAttribute("user", user);
		}
		List<Event> listOfEvents = eventService.getAll();
		model.addAttribute("listOfEvents", listOfEvents);
		model.addAttribute("clubs", clubService.allClubs());
		return "dashboard.jsp";
	}

	@GetMapping("/{id}")
	public String showOneEvent(@PathVariable("id") Long id, Model model, HttpSession session) {
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);

		Event event = eventService.getOne(id);
		model.addAttribute("event", event);

		return "one_event.jsp";
	}
	
	@GetMapping("/{id}/attendees")
	public String showAttendees(@PathVariable("id") Long id, Model model, HttpSession session) {
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);
		Event event = eventService.getOne(id);
		model.addAttribute("event", event);
		List <User> rsvps = event.getAttendees();
		model.addAttribute("rsvps", rsvps);
		return "event_attendees.jsp";
	}

//	UPDATE

	@GetMapping("/{id}/edit")
	public String editEvent(@PathVariable("id") Long id, Model model, HttpSession session) {
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);

		Event event = eventService.getOne(id);
		model.addAttribute("event", event);

		return "edit_event.jsp";
	}

	@PostMapping("/{id}/update")
	public String updateEvent(@PathVariable("id") Long id, HttpSession session, Model model,
			@Valid @ModelAttribute("event") Event event, BindingResult result) {
				System.out.println("dddddddddddddddddddddddddddddddd");
		if (result.hasErrors()) {
			User user = userService.getOne((Long) session.getAttribute("user_id"));
			model.addAttribute("user", user);
			return "edit_event.jsp";
		}
		Event editedEvent = eventService.save(event);
		return "redirect:/events/" + editedEvent.getId();
	}

//	DELETE
	@GetMapping("/{id}/delete")
	public String deleteEvent(@PathVariable("id") Long id) {
		eventService.delete(id);
		return "redirect:/events";
	}
	
// SEARCH BY DATE
	@RequestMapping("/search/dates")
	public String searchDate(@RequestParam(name="startDate") String startDate, @RequestParam(name="endDate") String endDate, Model model, HttpSession session) throws ParseException {
		Date newStartDate = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
		Date newEndDate =  new SimpleDateFormat("yyyy-MM-dd").parse(endDate);
		List <Event> eventsByDates = eventService.getAllByDateRange(newStartDate, newEndDate);
		model.addAttribute("listOfEvents", eventsByDates);
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);
		model.addAttribute("clubs", clubService.allClubs());
		return "dashboard.jsp";
	}

// SEARCH BY CLUB
	@RequestMapping("/search/club")
	public String searchClub(@RequestParam(name="club") Long id, Model model, HttpSession session) {
		System.out.println(id);
		List <Event> eventsByClub = eventService.getAllByClubHosting(clubService.findClub(id));
		model.addAttribute("listOfEvents", eventsByClub);
		User user = userService.getOne((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);
		model.addAttribute("clubs", clubService.allClubs());
		return "dashboard.jsp";
	}
	
}
