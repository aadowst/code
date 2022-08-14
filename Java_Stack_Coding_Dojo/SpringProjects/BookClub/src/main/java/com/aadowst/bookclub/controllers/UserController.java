package com.aadowst.bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.aadowst.bookclub.models.LoginUser;
import com.aadowst.bookclub.models.User;
import com.aadowst.bookclub.services.UserService;

@Controller
public class UserController {
@Autowired
private UserService userService;

@GetMapping("/")
public String index(@ModelAttribute("newUser") User newUser, @ModelAttribute("newLogin") LoginUser newLogin, HttpSession session) {
	if(session.getAttribute("userId") != null) {
		return "redirect:/books";
	}
	return "index.jsp";
}

@PostMapping("/register")
public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
	User user = userService.register(newUser, result);
	
	if(result.hasErrors()) {
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	session.setAttribute("userId", user.getId());
	return "redirect:/books";
}

@PostMapping("/login")
public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
	User user = userService.login(newLogin, result);
	if(result.hasErrors()) {
		model.addAttribute("newUser", new User());
		return "index.jsp";
	}
	session.setAttribute("userId", user.getId());
	return "redirect:/books";
}

@GetMapping("/logout")
public String logout(HttpSession session) {
	session.removeAttribute("userId");
	return "redirect:/";
}

//@GetMapping("/dashboard")
//public String dashboard(HttpSession session, Model model) {
//	if(session.getAttribute("userId") != null) {
//	User user = userService.getOne((Long) session.getAttribute("userId"));
//	model.addAttribute("user", user);
//	return "dashboard.jsp";
//	}
//	return "redirect:/";
//}

}
