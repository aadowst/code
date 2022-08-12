package com.aadowst.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aadowst.dojosandninjas.models.Dojo;
import com.aadowst.dojosandninjas.models.Ninja;
import com.aadowst.dojosandninjas.services.DojoService;
import com.aadowst.dojosandninjas.services.NinjaService;

@Controller
public class NinjaController {
@Autowired
private NinjaService ninjaService;

@Autowired
private DojoService dojoService;


@GetMapping("/ninjas/new")
public String newNinja(Model model, @ModelAttribute("ninja")Ninja ninja) {
	List<Dojo> listOfDojos = dojoService.getAll();
	model.addAttribute("listOfDojos", listOfDojos);
	return "newNinja.jsp";
}

@PostMapping("/ninjas/create")
public String createNinja(Model model, @Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, @RequestParam(value="dojo") String dojoId) {
	if(result.hasErrors()) {
		System.out.println(result.getAllErrors());
		List<Dojo> listOfDojos = dojoService.getAll();
		model.addAttribute("listOfDojos", listOfDojos);
		return "newNinja.jsp";
	}
	ninjaService.save(ninja);
	return "redirect:/dojos/" + dojoId; /*change this to the dojo route when that is created*/
}
}

