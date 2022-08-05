*Creating the Application*
File > New > Spring Starter Project
change name(lower case)
Make sure Type = Maven; Java Version = 8; and Packaging = War
group field = reverse domain (com.aadowst.projectname)
Add Description
Next
Select "Spring Boot DevTools" and "Spring Web"
Finish

*Running the Application*
Right click on application (i.e. projectname) > Run As > Spring Boot App
visit localhost:8080 to look for whitelabel error (this is good)

*Setting up Controller(s)*
Right click on the main package (in src/main/java folder) > New > Package
add ".controllers" to the name and click finish (this will put the controllers package inside the main package)
Right click on the .controllers package and create a new class. Name the class 'xcontroller' where x is something meaningful

*Setting up RestController*
in xcontroller.java add @RestController above the public class ... method.
Ctrl+shift+O will auto-import what is needed

*Setting up RequestMapping*
within the class, type "@RequestMapping('route')" and then set up a function below:
public String index(){
    return "string"
}

_Sample Code_
```java
package com.aadowst.helloworld.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "hello there";
	}
}
```

*Run project*
Save and run

*Settin up Path Variables*
in the RequestMapping, you can include variables in the route
the variables are then passed in to the method as paramenters
The variables can also be in the return string

_Sample Code_
```java
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HomeController {
    @RequestMapping("/m/{track}/{module}/{lesson}")
    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
    }
}
```
