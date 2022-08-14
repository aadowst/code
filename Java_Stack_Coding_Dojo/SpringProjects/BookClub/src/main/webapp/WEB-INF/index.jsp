<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
   <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<meta charset="ISO-8859-1">
<title>Login and Registration</title>
</head>
<body>
<div class="container">
<div>

<h2>Book Club</h2>

<h6>A place for friends to share thoughts on books.</h6> 

</div>

<div class="main d-flex col-9 justify-content-between">
<div class="register col-4">
<h2>Register</h2>
<form:form action="/register" method="post" modelAttribute="newUser">

<div class="form-group d-flex justify-content-between my-2">
<form:label path="name">Name:  </form:label>
<form:input type="text" path="name"/>
<form:errors class="text-danger" path="name"/>
</div>

<div class="form-group d-flex justify-content-between my-2">
<form:label path="email">Email:  </form:label>
<form:input type="text" path="email"/>
<form:errors class="text-danger" path="email"/>
</div>

<div class="form-group d-flex justify-content-between my-2">
<form:label path="password">Password: </form:label>
<form:input type="password" path="password"/>
<form:errors class="text-danger" path="password"/>
</div>

<div class="form-group d-flex justify-content-between my-2">
<form:label path="confirm">Confirm PW: </form:label>
<form:input type="password" path="confirm"/>
<form:errors class="text-danger" path="confirm"/>
</div>
<input type="submit" value="Register" class="btn btn-info">
</form:form>
</div>
<div class="login col-4">
<h2>Login</h2>
<form:form action="/login" method="post" modelAttribute="newLogin">
<div class="form-group d-flex justify-content-between my-2">
<form:label path="email">Email:  </form:label>
<form:input type="text" path="email"/>
<form:errors class="text-danger" path="email"/>
</div>

<div class="form-group d-flex justify-content-between my-2">
<form:label path="password">Password: </form:label>
<form:input type="password" path="password"/>
<form:errors class="text-danger" path="password"/>
</div>
<input type="submit" value="Login" class="btn btn-success">

</form:form>
</div>
</div>
</div>
</body>
</html>