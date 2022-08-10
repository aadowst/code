package com.aadowst.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


import com.aadowst.savetravels.models.Expense;
import com.aadowst.savetravels.services.ExpenseService;

@Controller
public class TravelController {
	
	@Autowired
	ExpenseService expenseService;
	
@GetMapping("/")
public String index(){
	return "redirect:/expenses";
}
@GetMapping("/expenses")
public String expenses(Model model, @ModelAttribute("expense") Expense expense){
	List<Expense> listOfExpenses = expenseService.getAll();
	model.addAttribute("listOfExpenses", listOfExpenses);
	return "index.jsp";
}

@PostMapping("/expenses")
public String create(Model model,
		@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
	
	if (result.hasErrors()) {
		List<Expense> listOfExpenses = expenseService.getAll();
		model.addAttribute("listOfExpenses", listOfExpenses);
		return "index.jsp";
	}
expenseService.save(expense);
return "redirect:/expenses";
}

}
