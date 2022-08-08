package com.aadowst.omukuji.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@RequestMapping ("/omikuji")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping ("/omikuji/show")
	public String show(	Model model, HttpSession session
	){
		model.addAttribute("number", session.getAttribute("number"));
		model.addAttribute("city", session.getAttribute("city"));
		model.addAttribute("person", session.getAttribute("person"));
		model.addAttribute("hobby", session.getAttribute("hobby"));
		model.addAttribute("organism", session.getAttribute("organism"));
		model.addAttribute("saying", session.getAttribute("saying"));
		return "show.jsp";
	}
	
	@PostMapping ("/omikuji/submit")
	public String show(	HttpSession session, 
			@RequestParam(value="number") Integer number, 
	@RequestParam(value="city") String city,
	@RequestParam(value="person") String person,
	@RequestParam(value="hobby") String hobby,
	@RequestParam(value="organism") String organism,
	@RequestParam(value="saying") String saying
	){
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("organism", organism);
		session.setAttribute("saying", saying);
		return "redirect:/omikuji/show";
	}
}
