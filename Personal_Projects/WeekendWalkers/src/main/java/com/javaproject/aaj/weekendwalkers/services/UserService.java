package com.javaproject.aaj.weekendwalkers.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.javaproject.aaj.weekendwalkers.models.LoginUser;
import com.javaproject.aaj.weekendwalkers.models.User;
import com.javaproject.aaj.weekendwalkers.repos.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository uRepo;
	
	public User register(User user, BindingResult result) {
		if(uRepo.findByEmail(user.getEmail()).isPresent()) {
			result.rejectValue("email", "Unique", "Email is already in use.");
		}
		
		if(!user.getPassword().equals(user.getConfirm())) {
			result.rejectValue("confirm", "Matches","The Confirm Password must math Password!");
		}
		
		if(result.hasErrors()) {
			return null;
		}
		
		String hash = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hash);
				
		return uRepo.save(user);
	}
	
	public User login(LoginUser loginUser, BindingResult result) {
		if(result.hasErrors()) {
			return null;
		}
		
		Optional<User> potentialUser = uRepo.findByEmail(loginUser.getEmail());
		if(!potentialUser.isPresent()) {
			result.rejectValue("email", "Unique","Inavalid Credentials");
			return null;
		}
		
		User user = potentialUser.get();
		if(!BCrypt.checkpw(loginUser.getPassword(), user.getPassword())) {
			result.rejectValue("password", "Matches", "Invalid Credentials");
			
			return null;
		}
		
		return user;
		
	}
	
	public User getOne(Long id) {
		return uRepo.findById(id).orElse(null);
	}
	
	public User update(User user) {
		return uRepo.save(user);
	}
	
}
