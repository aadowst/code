package com.aadowst.bookclub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
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

import com.aadowst.bookclub.models.Book;
import com.aadowst.bookclub.models.User;
import com.aadowst.bookclub.services.BookService;
import com.aadowst.bookclub.services.UserService;

@Controller
@RequestMapping("/books")
public class BookController {
	@Autowired
	private BookService bookService;
	@Autowired
	private UserService userService;

//	@GetMapping("")
//	public String books(Model model, HttpSession session) {
//		if(session.getAttribute("userId") != null) {
//			User user = userService.getOne((Long) session.getAttribute("userId"));
//			model.addAttribute("user", user);
//			
//			List<Book> listOfBooks = bookService.getAll();
//			model.addAttribute("listOfBooks", listOfBooks);
//			return "allBooks.jsp";
//
//			}
//			return "redirect:/";
//	}

	@GetMapping("")
	public String books(Model model, HttpSession session, @ModelAttribute("book") Book book) {
		if (session.getAttribute("userId") != null) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("user", user);

			List<Book> listOfAvailableBooks = bookService.getAllNotBorrowed();
			model.addAttribute("listOfAvailableBooks", listOfAvailableBooks);

			List<Book> listOfBorrowedBooks = bookService.getAllBorrowed(user.getId());
			model.addAttribute("listOfBorrowedBooks", listOfBorrowedBooks);

			return "allBooks.jsp";

		}
		return "redirect:/";
	}

	@GetMapping("/new")
	public String newBook(HttpSession session, @ModelAttribute("book") Book book, Model model) {
		if (session.getAttribute("userId") != null) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("user", user);
			return "newBook.jsp";
		}
		return "redirect:/";
	}

	@PostMapping("/create")
	public String createBook(HttpSession session, Model model, @Valid @ModelAttribute("book") Book book,
			BindingResult result) {
		if (result.hasErrors()) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("owner", user);
			return "newBook.jsp";
		}
		bookService.save(book);
		return "redirect:/books";
	}

	@GetMapping("/{id}")
	public String readOne(@PathVariable("id") Long id, Model model, HttpSession session) {
		if (session.getAttribute("userId") != null) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("user", user);

			Book book = bookService.getOne(id);
			model.addAttribute("book", book);

			return "oneBook.jsp";
		}

		return "redirect:/";
	}

	@GetMapping("/{id}/edit")
	public String editOne(@PathVariable("id") Long id, Model model, HttpSession session) {
		if (session.getAttribute("userId") != null) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("user", user);

			Book book = bookService.getOne(id);
			model.addAttribute("book", book);

			return "updateBook.jsp";
		}

		return "redirect:/books";
	}

	@PostMapping("/{id}/update")
	public String updateBook(@PathVariable("id") Long id, HttpSession session, Model model,
			@Valid @ModelAttribute("book") Book book, BindingResult result) {
		if (result.hasErrors()) {
			User user = userService.getOne((Long) session.getAttribute("userId"));
			model.addAttribute("user", user);
			return "updateBook.jsp";
		}
		bookService.save(book);
		return "redirect:/books";
	}

	@GetMapping("/{id}/delete")
	public String deleteBook(@PathVariable("id") Long id) {
		bookService.delete(id);
		return "redirect:/books";
	}

	@GetMapping("/{id}/borrow")
	public String borrowBook(@PathVariable("id") Long id, HttpSession session) {
		Book book = bookService.getOne(id);
		User user = userService.getOne((Long) session.getAttribute("userId"));
		book.setBorrower(user);
		bookService.save(book);
		return "redirect:/books";
	}

	@GetMapping("/{id}/return")
	public String returnBook(@PathVariable("id") Long id, HttpSession session) {
		Book book = bookService.getOne(id);
		book.setBorrower(null);
		bookService.save(book);
		return "redirect:/books";
	}

}
