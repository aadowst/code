package com.aadowst.mvc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.aadowst.mvc.models.Book;
import com.aadowst.mvc.services.BookService;

@Controller
public class BookController {
	
	@Autowired
	BookService bookService;
	
	@RequestMapping("/books/{bookId}")
	public String showOne(Model model, @PathVariable("bookId") long bookId) {
		
		Book book = bookService.findBook(bookId);
		model.addAttribute("book", book);

		return "show.jsp";
	}

}
