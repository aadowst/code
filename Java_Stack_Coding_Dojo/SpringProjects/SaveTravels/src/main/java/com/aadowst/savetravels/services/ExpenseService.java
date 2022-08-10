package com.aadowst.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aadowst.savetravels.models.Expense;
import com.aadowst.savetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {

//	private final ExpenseRepository expenseRepository;
//	
//	public ExpenseService(ExpenseRepository expenseRepository) {
//		this.expenseRepository = expenseRepository;
//	}
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	// ========== Create / Update ===============

	public Expense save(Expense expense) {
		return expenseRepository.save(expense);
	}

	// ========== Read ==========================
	
	public List<Expense> getAll() {
		return (List<Expense>) expenseRepository.findAll();
	}
	
	public Expense getOne(Long id) {
		Optional<Expense> optExpense = expenseRepository.findById(id);
		
		if (optExpense.isPresent()) {
			return optExpense.get();
		} else {
			return null;
		}
	}
	
	// ========== Delete ========================
	
	public void delete(Long id) {
		expenseRepository.deleteById(id);
	}
	}
