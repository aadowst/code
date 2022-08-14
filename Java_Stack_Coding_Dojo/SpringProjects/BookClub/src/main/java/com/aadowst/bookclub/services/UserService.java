package com.aadowst.bookclub.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.aadowst.bookclub.models.LoginUser;
import com.aadowst.bookclub.models.User;
import com.aadowst.bookclub.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository; 
	
//	REGISTER AND LOGIN

    public User register(User newUser, BindingResult result) {
        // is the email unique?
    	if(userRepository.findByEmail(newUser.getEmail()).isPresent()){
    		result.rejectValue("email", "Unique", "Email already in use");
    	}
    	//    	compare password to confirmPassword
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Matches", "Password and confirm password must match");
    	}
    	// check for any errors  
    	if(result.hasErrors()) {
    		return null;
    	}
    	
    	String hashedPassword = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashedPassword);
    	
    	return userRepository.save(newUser);
    }
    
    
    public User login(LoginUser newLoginUser, BindingResult result) {
    	if(result.hasErrors()) {
    		return null;
    	}
    	Optional<User> potentialUser = userRepository.findByEmail(newLoginUser.getEmail());
    	if(!potentialUser.isPresent()) {
    		result.rejectValue("email", "Unique", "Invalid credentials");
    		return null;
    	}
    	User user = potentialUser.get();
    	if(!BCrypt.checkpw(newLoginUser.getPassword(), user.getPassword())) {
    		result.rejectValue("password", "Matches", "Invalid credentials");
    		return null;
    	}
        return user;
    }
	
//	READ
	
	public User getOne(Long id) {
		return userRepository.findById(id).orElse(null);
	}
}