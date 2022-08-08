package com.aadowst.ninjagold.controllers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@SuppressWarnings("unchecked")
	@RequestMapping("/gold")
	public String index(HttpSession session, Model model) {
		ArrayList<String> activities = new ArrayList<>();
		if (session.getAttribute("gold") == null) {
			session.setAttribute("gold", 0);
			session.setAttribute("activities", activities);
		}else {
			activities = (ArrayList<String>) session.getAttribute("activities");
		}


		return "index.jsp";
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/submit")
	public String submit(Model model, HttpSession session, @RequestParam(value = "location") String location) {
		Random randomizer = new Random();
		Integer gold = (Integer) session.getAttribute("gold");
		ArrayList<String> activities = new ArrayList<>();
		activities = (ArrayList<String>) session.getAttribute("activities");
		
		String timeStamp = new SimpleDateFormat("MMMM d YYYY HH:mm a").format(new java.util.Date());
		if (location.equals("farm")) {
			Integer newGold = randomizer.nextInt(10) + 10;
			gold += newGold;
			session.setAttribute("gold", gold);
			activities.add("You went to the " + location + " and earned " + newGold+  " gold. " +timeStamp);
			session.setAttribute("activities", activities);

		} else if (location.equals("cave")) {
			Integer newGold = randomizer.nextInt(5) + 5;
			gold += newGold;
			session.setAttribute("gold", gold);
			activities.add("You went to the " + location + " and earned " + newGold+  " gold. " +timeStamp);
			session.setAttribute("activities", activities);
		} else if (location.equals("house")) {
			Integer newGold = randomizer.nextInt(2) + 3;
			gold += newGold;
			session.setAttribute("gold", gold);
			activities.add("You went to the " + location + " and earned " + newGold+  " gold. " +timeStamp);
			session.setAttribute("activities", activities);

		} else {
			Integer newGold = randomizer.nextInt(100) - 50;
			gold += newGold;
			session.setAttribute("gold", gold);
			
			if(newGold < 0) {
				activities.add("You went on a " + location + " and lost " + -1*newGold+  " gold. Ouch! " +timeStamp);	
			}else {
				activities.add("You went on a " + location + " and earned " + newGold+  " gold. " +timeStamp);				
			}
			session.setAttribute("activities", activities);
		}



		return "redirect:/gold";
	}

}
