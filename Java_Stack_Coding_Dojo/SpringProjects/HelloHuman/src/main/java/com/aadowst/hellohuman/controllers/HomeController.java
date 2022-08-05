package com.aadowst.hellohuman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/")
	public String index(@RequestParam(value="name", required=false) String searchQuery1, @RequestParam(value="times", required=false) String number) {
		if(searchQuery1 == null) {
			
			return "Hello Human";	
		}else if(number == null){
			return "Hello " + searchQuery1;
		}else {
			String returnString = "Hello " + searchQuery1;
			int x =Integer.parseInt(number);
			for(int i = 2; i<= x; i++) {
				returnString += " Hello " + searchQuery1;

			}
			return returnString;
		}
	}
	
	
//	@RequestMapping("/")
//	public String index(@RequestParam(value="name", required=false) String searchQuery1, @RequestParam(value="last_name", required=false) String searchQuery2) {
//		if(searchQuery1 == null) {
//			
//			return "Hello Human";	
//		}else if(searchQuery2 == null){
//			return "Hello " + searchQuery1;
//		}else {
//			return "Hello " + searchQuery1 + " " + searchQuery2;
//		}
//	}
}
