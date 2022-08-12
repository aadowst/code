package com.aadowst.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.aadowst.dojosandninjas.models.Dojo;
import com.aadowst.dojosandninjas.services.DojoService;


@Controller
public class DojoController {
	
	@Autowired
	private DojoService dojoService;

	@GetMapping("/")
	public String index(Model model, @ModelAttribute("dojo") Dojo dojo) {
		List<Dojo> listOfDojos = dojoService.getAll();
		model.addAttribute("listOfDojos", listOfDojos);
		return "index.jsp";
	}
	
	@PostMapping("/dojos/create")
	public String createDojo(Model model, @Valid @ModelAttribute ("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			List<Dojo> listOfDojos = dojoService.getAll();
			model.addAttribute("listOfDojos", listOfDojos);
			return "index.jsp";
		}
		dojoService.save(dojo);
		return "redirect:/";
	}
	
	@GetMapping("/dojos/{id}")
	public String showOneDojo(Model model, @PathVariable("id") long id) {
		Dojo dojo = dojoService.getOne(id);
		model.addAttribute("dojo", dojo);
		return "oneDojo.jsp";
	}
	
}
