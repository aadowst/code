package com.javaproject.aaj.weekendwalkers.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.javaproject.aaj.weekendwalkers.models.LoginUser;
import com.javaproject.aaj.weekendwalkers.models.User;
import com.javaproject.aaj.weekendwalkers.services.ClubService;
import com.javaproject.aaj.weekendwalkers.services.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService uServ;
	
	@Autowired
	private ClubService clubServ;
	
	@GetMapping("/")
	public String index(@ModelAttribute("user") User user, @ModelAttribute("loginUser") LoginUser loginUser, HttpSession session) {
		if(session.getAttribute("user_id") != null) {
			return "redirect:/events";
		}
		return "index.jsp";
	}
	
	@GetMapping("/dashboard")
	public String dashboard(Model model, HttpSession session) {
		if(session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		Long id = (Long) session.getAttribute("user_id");
		User user = uServ.getOne(id);
		model.addAttribute("clubs", clubServ.allClubs());
		model.addAttribute("user",user);
		return "dashboard.jsp";
	}
		
	
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("user")User user, BindingResult result, Model model, HttpSession session) {
		User newUser = uServ.register(user, result);
		
		if(result.hasErrors()) {
			model.addAttribute("loginUser", new LoginUser());
			return "index.jsp";
		}
		
		session.setAttribute("user_id", newUser.getId());
		
		return "redirect:/events";
	}
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("loginUser")LoginUser loginUser, BindingResult result, Model model, HttpSession session) {
		User newUser = uServ.login(loginUser, result);
		
		if(result.hasErrors()) {
			model.addAttribute("user", new User());
			return "index.jsp";
		}
		
		session.setAttribute("user_id", newUser.getId());
		
		return "redirect:/events";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user_id");
		return "redirect:/";
	}
	
}
