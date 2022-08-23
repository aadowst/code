package com.aadowst.savetravels.controllers;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

// import com.aadowst.mvc.models.Book;
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
@RequestMapping("/expenses")
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

@RequestMapping("/expenses/{id}")
public String showOne(Model model, @PathVariable("id") long id) {
	Expense expense = expenseService.getOne(id);
		model.addAttribute("expense", expense);

	return "show.jsp";
}


@RequestMapping("/expenses/{id}/edit")
public String edit(@PathVariable("id") Long id, Model model) {
	Expense expense = expenseService.getOne(id);
	model.addAttribute("expense", expense);
	return "edit.jsp";
}

@PutMapping(value="expenses/{id}/update")
public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
	System.out.println("Binding Result:  " + result);
	
	if (result.hasErrors()) {
		return "edit.jsp";
	}else {

		expenseService.save(expense);
		return "redirect:/expenses";
	}
}

@RequestMapping(value="/expenses/{id}", method=RequestMethod.DELETE)
public String destroy(@PathVariable("id") Long id) {
	expenseService.delete(id);
	return "redirect:/expenses";
}

}
