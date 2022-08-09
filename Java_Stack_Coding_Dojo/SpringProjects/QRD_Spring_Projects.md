*Creating the Application*
File > New > Spring Starter Project
change name(lower case)
Make sure Type = Maven; Java Version = 8; and Packaging = War
package and group fields = reverse domain (com.aadowst.projectname)
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



<!-- *Setting up RestController*
in xcontroller.java add @RestController above the public class ... method.
Ctrl+shift+O will auto-import what is needed -->

*Setting up Controller*
in xcontroller.java add @Controller above the public class ... method.
Ctrl+shift+O will auto-import what is needed

*Setting up RequestMapping*
within the class, type "@RequestMapping('route')" and then set up a function below:
public String index(){
    return "string"
}

<!-- _Sample Code for using RestController_
```java
package com.aadowst.helloworld.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "hello there";
	}
}
``` -->

_Sample Code using Controller_
```java
package com.aadowst.PACKAGENAME.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
}
```

*Run project*
Save and run

<!-- *Settin up Path Variables*
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
} -->
```

*Add Dependencies*

Install the dependency below into pom.xml:
```xml
<dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
</dependency>
<dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>jstl</artifactId>
</dependency>
```

*Set up WEB-INF*
in src > main > webapp, add WEB-INF folder
right click on the WEB-INF folder, add New > Other. Search for JSP and select "JSP File"
name it (e.g. index.jsp)
check src/main/resources > templates > application.properties
add: spring.mvc.view.prefix=/WEB-INF/


*Import JSTL into your template in any .jsp file where it is needed*
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
```

*Import Model class in Controller*
as a parameter in the method add (Model model)
now attributes of the model can be passed to the jsp file and rendered on the page.

_Sample Controller Code_
```java
package com.aadowst.PACKAGE;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class HomeController {
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("firstname", "Adrian");
		model.addAttribute("lastname", "Dowst");
		return "index.jsp";
	}
}
```

_Sample JSP Code_
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Two plus two is: </h1>
<h2><c:out value="${2+2}"/></h2>
<h2>My name is <c:out value="${firstname}"/> <c:out value="${lastname}"/></h2>
</body>
</html>
```

*Setting up Models(s)*
Right click on the main package (in src/main/java folder) > New > Package
add ".models" to the name and click finish (this will put the models package inside the main package)
Right click on the .models package and create a new class. Name the class 'xmodel' where x is something meaningful

*Adding CSS*
Right click on src/main/resources/static
Select > New > Other
Search for CSS
make sure you are in src/main/resources/static
save file (e.g. css/style.css)
add the link tag to your .jsp file(s):  	<link rel="stylesheet" type="text/css" href="/css/style.css">

*Adding JS*
Right click on src/main/resources/static
Select New > Other
Search for Javascript
Save file as js/script.js (this will also create a new folder)
add teh script tag to your .jsp file(s):  	<script type="text/javascript" src="/js/script.js"></script>

*Adding Bootstrap to Spring Projects*
In pom.xml add the following dependencies
```xml
    <!-- webjars locator dependency enables auto-detection of the version, so your .jsp 
        file links are version-agnostic in case you update the versions here in your pom later -->
<dependency>
<groupId>org.webjars</groupId>
<artifactId>webjars-locator</artifactId>
<version>0.30</version>
</dependency>
<dependency>
<groupId>org.webjars</groupId>
<artifactId>bootstrap</artifactId>
<version>5.0.1</version>
</dependency>
<dependency>
<groupId>org.webjars</groupId>
<artifactId>jquery</artifactId>
<version>3.6.0</version>
</dependency>

```
inside the head section of your .jsp file(s) add:
```jsp
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
```

*Setting up Session*
instead of Model model, add session as a parameter:  (HttpSession session)
set the attribute of session:  session.setAttribute("key", "value")
only need to set up session on the main page, becuase the data will be stored as an object

_Sample Code_
```java
    public String index(HttpSession session) {
        session.setAttribute("count", 0);
		return "index.jsp";
	}
```

*Using Session data*
to store session data in a variable, it need to be typecast:  VariableType variableName = (VariableType) session.getAttribute("key");
session data can also be added to the Model model

_Sample Code_
```java
// ...
	public String showCount(HttpSession session, Model model) {
		Integer currentCount = (Integer) session.getAttribute("count");
		model.addAttribute("countToShow", currentCount);
		return "showCount.jsp";
	}
// ...
```

*Setting Up POST*
Make sure post is the method in the form.
In the Controller, use code like that below
```java
@RequestMapping(value="/login", method=RequestMethod.POST)
public String login(
    @RequestParam(value="email") String email,
    @RequestParam(value="password") String password) {
    // CODE TO PROCESS FORM ie. check email and password
    return "redirect:/dashboard";
}
```

As a shorthand, you can use PostMapping (and GetMapping):
```java
@PostMapping("/users")
public String login() {
// ...
}
```

*Spring Data JPA*
in pom.xml add
```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>  
```

*Connecting to MySQL*
in application.properties add:
spring.datasource.url=jdbc:mysql://localhost:3306/<<YOUR_SCHEMA>>
spring.datasource.username=<<dbuser>>
spring.datasource.password=<<dbpassword>>

spring.jpa.hibernate.ddl-auto=update