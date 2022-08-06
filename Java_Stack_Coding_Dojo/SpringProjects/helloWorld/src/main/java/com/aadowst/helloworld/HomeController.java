package com.aadowst.helloworld;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RestController
public class HomeController {


//@RequestMapping("/")
//public String index(@RequestParam(value="q", required=false)String searchQuery) {
//	if(searchQuery == null) {
//		return "you searched for nothing";
//		}else {
//				return "You searched for:  " + searchQuery;
//	}
//}
//
//@RequestMapping("m/{track}/{module}/{lesson}")
//public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson) {
//	return "Track:  " + track  + ",Module: "  + module  +  ", Lesson:  "  + lesson;
//}
//
//@RequestMapping("/world")
//public String world() {
//	return "Class level annotations are cool, too!";
//}
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("firstname", "Adrian");
		model.addAttribute("lastname", "Dowst");
		return "index.jsp";
	}

}
