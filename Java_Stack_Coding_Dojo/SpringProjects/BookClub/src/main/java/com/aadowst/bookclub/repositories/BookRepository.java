package com.aadowst.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aadowst.bookclub.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	@Override
	List<Book> findAll();

	List<Book> findAllByBorrowerIsNull();

	List<Book> findAllByBorrowerId(long borrowerId);

}
