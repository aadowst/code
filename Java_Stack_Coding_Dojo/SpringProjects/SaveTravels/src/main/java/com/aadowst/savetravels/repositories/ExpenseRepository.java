package com.aadowst.savetravels.repositories;

import org.springframework.data.repository.CrudRepository;

import com.aadowst.savetravels.models.Expense;

public interface ExpenseRepository extends CrudRepository<Expense, Long>{

}
