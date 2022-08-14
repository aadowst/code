package com.aadowst.bookclub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadowst.bookclub.models.Book;
import com.aadowst.bookclub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;
	
	// ========== Create / Update ===============

	public Book save(Book book) {
		return bookRepository.save(book);
	}

	// ========== Read ==========================
	
	public List<Book> getAll() {
		return (List<Book>) bookRepository.findAll();
	}
	
	public Book getOne(Long id) {
        return bookRepository.findById(id).orElse(null);
	}
	
	// ========== Delete ========================
	
	public void delete(Long id) {
		bookRepository.deleteById(id);
	}
	
}
