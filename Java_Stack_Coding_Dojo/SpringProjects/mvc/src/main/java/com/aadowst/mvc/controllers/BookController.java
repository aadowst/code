package com.aadowst.mvc.controllers;

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
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;

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
	
    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
    }
    
    
//    CODE FOR CREATING NEW BOOK ENTRIES BEFORE USING DATA BINDING
//    @PostMapping("/books/create")
//    public String create(
//    	    @RequestParam("title") String title,
//    	    @RequestParam("description") String description,
//    	    @RequestParam("language") String language,
//    	    @RequestParam("numberOfPages") Integer pages) 
//    	{
//    	    // CODE TO MAKE A NEW BOOK AND SAVE TO THE DB
//    	    Book book = new Book(title, description, language, pages);
//    	    bookService.createBook(book);
//    	    return "redirect:/books";
//    	}
//    @GetMapping("books/new")
//    public String newBook() {
//    	return "new.jsp";
//    }

    @GetMapping("books/new")
    public String newBook(@ModelAttribute("book") Book book) {
    	return "new.jsp";
    }
    
    @PostMapping("/books")
    public String create(
    		@Valid @ModelAttribute("book") Book book, BindingResult result) {
    	
    	if (result.hasErrors()) {
    		return "new.jsp";
    	}
bookService.createBook(book);
return "redirect:/books";
    }
}
