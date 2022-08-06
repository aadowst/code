package com.aadowst.displaydate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Controller
public class TimeAndDateController {

	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		LocalDate myDate = LocalDate.now();
		DateTimeFormatter myFormat = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy");
		String myFormattedDate = myDate.format(myFormat);
		model.addAttribute("date", myFormattedDate);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		LocalTime myTime = LocalTime.now();
		DateTimeFormatter myFormat = DateTimeFormatter.ofPattern("h:mm a");
		String myFormattedTime = myTime.format(myFormat);
		model.addAttribute("time", myFormattedTime);
		return "time.jsp";
	}
}
