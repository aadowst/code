package com.javaproject.aaj.weekendwalkers.repos;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.javaproject.aaj.weekendwalkers.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	Optional<User>findByEmail(String email);
}
