*Creating the Application*
File > New > Spring Starter Project
change name(lower case)
Make sure Type = Maven; Java Version = 8; and Packaging = War
package and group fields = reverse domain (com.aadowst.projectname)
Add Description
Next
Select "Spring Boot DevTools" and "Spring Web" 
Finish

*Set up MySQL Server*
Open MySQL workbench
connect to database
create a new schema

*Set up Project*
in src/main/resources > templates > application.properties, add the following:
```xml
#Folder for jsp pages
spring.mvc.view.prefix=/WEB-INF/
#Connect to MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/<<YOUR_SCHEMA>>
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
#using hidden methods for put requests
spring.mvc.hiddenmethod.filter.enabled=true
```

*Running the Application*
Right click on application (i.e. projectname) > Run As > Spring Boot App
visit localhost:8080 to look for whitelabel error (this is good)



*Add Dependencies*

Install the dependency below into pom.xml:


```xml
        <!-- DEPENDENCIES FOR STARTING SPRING PROJECTS-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!-- DEPENDENCIES FOR DISPLAYING JSPS AND USING JSTL TAGS -->
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
        </dependency>
        <!-- DEPENDENCIES FOR INTEGRATING SQL DATABASE AND USING JPA -->
        <!-- Note: Project will not run until a schema has been created and the 
            proper settings in application properties are present for 
            connecting to a database. -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <!-- DEPENDENCY FOR USING VALIDATION ANNOTATIONS -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <!-- DEPENDENCY FOR USING BCRYPT  -->
        <dependency>
            <groupId>org.mindrot</groupId>
            <artifactId>jbcrypt</artifactId>
            <version>0.4</version>
        </dependency>
        <!-- DEPENDENCIES FOR BOOTSTRAP -->
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



*Setting up Models(s)*
Right click on the main package (in src/main/java folder) > New > Package
add ".models" to the name and click finish (this will put the models package inside the main package)
Right click on the .models package and create a new class. Name the class 'xmodel' where x is something meaningful
In the model above the public class, add @Entitiy and @Table(name="models")
add all member variables with appropriate annotations (add custom error messages). Don't forget createdAt and updatedAt
if setting up a relationship, use the appropriate annotations
Add a zero-argument constructor
Add a constructor that passes in the variables that aren't automatic (i.e. not id, createdA, updatedAt) (NOT NECESSARY UNLESS USING AN API)
Add getters and setters (right click > Source> Generate...)
Add PrePersist and PreUpdate

_Sample Model with Many of ManyToOne (books to user)_
```java
// imports and packages automatically added up here
@Entity
@Table(name="books")
public class Book {
//	PRIMARY KEY
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
//  MEMBER VARIABLES
    @NotEmpty
    @Size(min = 5, max = 200)
    private String title;
    @NotEmpty
    @Size(min = 5, max = 200)
    private String author;
    @NotEmpty
    @Size(min = 5, max = 1000)
    private String thoughts;
    
//  DATA CREATION MEMBER VARIABLES
    
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
//  RELATIONSHIPS
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;
    
//  CONSTRUCTOR
    
    public Book() {}
    
//  DATA CREATION METHODS
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
//  GETTERS AND SETTERS
}
```

_Sample Relationships Code:  One of OneToMany (dojo to ninjas)_
```java
//  RELATIONSHIPS
    @OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
    private List<Ninja> ninjas;
```

_Sample User Code_
```java
@Entity
@Table(name="users")
public class User {
	
//	PRIMARY KEY
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
//  MEMBER VARIABLES
    
    @NotEmpty(message="First name is required!")
    @Size(min=3, max=30, message="First name must be between 3 and 30 characters")
    private String firstName;
    
    @NotEmpty(message="Last name is required!")
    @Size(min=3, max=30, message="Lsst name must be between 3 and 30 characters")
    private String lastName;
    
    @NotEmpty(message="Username is required!")
    @Size(min=3, max=30, message="Username must be between 3 and 30 characters")
    private String userName;
    
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotEmpty(message="Confirm Password is required!")
    @Size(min=8, max=128, message="Confirm Password must be between 8 and 128 characters")
    private String confirm;
    
//  DATA CREATION MEMBER VARIABLES
    
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
//  RELATIONSHIPS
    
//  CONSTRUCTORS
    
    public User() {}
    
//  DATA CREATION METHODS
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
//  GETTERS AND SETTERS
}
```

*Add LoginUser (if the site requires login & reg)*
in models, add the following code (notice @Entity is not included, since we don't want to save it in the db)
```java
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
    
public class LoginUser {
    
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    public LoginUser() {}
    
    // TODO - Don't forget to generate getters and setters
    
}
```


*Add Repository*
Add a new package called "repositories"
Add an interface called XxxRepository
Add @Repository above the public interface...
write "extends CrudRepository<Xxx, Long> after the name of the repository

_Sample Repository Code_
```java
package com.aadowst.savetravels.repositories;
import org.springframework.data.repository.CrudRepository;
import com.aadowst.savetravels.models.Expense;
@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long>{
    	List<Expense> findAll();
}

```

*Setting up a UserRepository (for registration)*
```java
// .. imports .. //
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findById(Long id); 
    }
```

*Add Services*
add a new package called "services"
add a new class named XxxService, where Xxx is the name of the model
add @Service above the class method
Autowire the repository (sets it up as a dependency and runs the constructor in one step):  @Autowired  #line break# private XxxRepository xxxRepository;
```java
@Service
public class ExpenseService {
	@Autowired
	private ExpenseRepository expenseRepository;

// Crud below
}
```


*Add CRUD*
in VSCode, change the names of the Types, variariables and repo name
then copy the code below
```java
	// ========== Create / Update ===============

	public Book save(Book book) {
		return bookRepository.save(book);
	}

	// ========== Read ==========================
	
	public List<Book> getAll() {
		return (List<Book>) bookRepository.findAll();
	}
	
	public Book getOne(Long id) {
        return bookRepository.findById(id).orElse(null);
	}
	
	// ========== Delete ========================
	
	public void delete(Long id) {
		bookRepository.deleteById(id);
	}
```

*Setting up a UserService*
```java
// imports
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
```

*Setting up Controller(s)*
Right click on the main package (in src/main/java folder) > New > Package
add ".controllers" to the name and click finish (this will put the controllers package inside the main package)
Right click on the .controllers package and create a new class. Name the class 'Xxxcontroller'


*Setting up Controller*
in Xxxcontroller.java add @Controller above the public class ... method.
Ctrl+shift+O will auto-import what is needed
Autowire the service:
@Autowired
private XxxService xxxService;

*Setting up RequestMapping*
within the class, type "@RequestMapping('route')" and then set up a function below:
public String index(){
    return "string"
}


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


_Sample Code UserController_
```java
@Controller
public class UserController {
@Autowired
private UserService userService;

@GetMapping("/")
public String index(@ModelAttribute("newUser") User newUser, @ModelAttribute("newLogin") LoginUser newLogin, HttpSession session) {
	if(session.getAttribute("userId") != null) {
		return "redirect:/dashboard";
	}
	return "index.jsp";
}

@PostMapping("/register")
public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model, HttpSession session) {
	User user = userService.register(newUser, result);
		if(result.hasErrors()) {
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	session.setAttribute("userId", user.getId());
	return "redirect:/dashboard";
}

@PostMapping("/login")
public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
	User user = userService.login(newLogin, result);
	if(result.hasErrors()) {
		model.addAttribute("newUser", new User());
		return "index.jsp";
	}
	session.setAttribute("userId", user.getId());
	return "redirect:/dashboard";
}

@GetMapping("/logout")
public String logout(HttpSession session) {
	session.removeAttribute("userId");
	return "redirect:/";
}

@GetMapping("/dashboard")
public String dashboard(HttpSession session, Model model) {
	if(session.getAttribute("userId") != null) {
	User user = userService.getOne((Long) session.getAttribute("userId"));
	model.addAttribute("user", user);
	return "dashboard.jsp";
	}
	return "redirect:/";
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

*Set up WEB-INF*
in src > main > webapp, add WEB-INF folder
right click on the WEB-INF folder, add New > Other. Search for JSP and select "JSP File"
name it (e.g. index.jsp)
Note:  you already set up the link to the WEB-INF folder above


*Import JSTL into your template in any .jsp file where it is needed*
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
```

*If you are using forms with validations, add the following to .jsp*
Note:  for login and reg the modelAttribute should be "newLogin" and "newUser", respectively
```jsp
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!-- SAMPLE FORM -->
<form:form action="/books" method="POST" modelAttribute="book">

<form:label path="title">Title:</form:label>
<form:errors path="title" class="text-danger"/>
<form:input path="title" />

<form:label path="description">Description:</form:label>
<form:errors path="description" class="text-danger"/>
<form:input path="description" />

<form:label path="language">Language:</form:label>
<form:errors path="language" class="text-danger"/>
<form:input path="language" />

<form:label path="numberOfPages">Number of Pages:</form:label>
<form:errors path="numberOfPages" class="text-danger"/>
<form:input path="numberOfPages" />

<input type="submit" />
</form:form>
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

inside the head section of your .jsp file(s) add:
```jsp
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For JS or jQuery -->
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



