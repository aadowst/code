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
<div class="main d-flex">
<div class="register col-8">
<h2>Register</h2>
<form:form action="/register" method="post" modelAttribute="newUser">

<div class="form-group">
<form:label path="firstName">First Name:  </form:label>
<form:input type="text" path="firstName"/>
<form:errors class="text-danger" path="firstName"/>
</div>

<div class="form-group">
<form:label path="lastName">Last Name:  </form:label>
<form:input type="text" path="lastName"/>
<form:errors class="text-danger" path="lastName"/>
</div>

<div class="form-group">
<form:label path="userName">User Name:  </form:label>
<form:input type="text" path="userName"/>
<form:errors class="text-danger" path="userName"/>
</div>

<div class="form-group">
<form:label path="email">Email:  </form:label>
<form:input type="text" path="email"/>
<form:errors class="text-danger" path="email"/>
</div>

<div class="form-group">
<form:label path="password">Password: </form:label>
<form:input type="password" path="password"/>
<form:errors class="text-danger" path="password"/>
</div>

<div class="form-group">
<form:label path="confirm">Confirm Password: </form:label>
<form:input type="password" path="confirm"/>
<form:errors class="text-danger" path="confirm"/>
</div>
<input type="submit" value="Register" class="btn btn-info">
</form:form>
</div>
<div class="login col-4">
<h2>Login</h2>
<form:form action="/login" method="post" modelAttribute="newLogin">
<div class="form-group">
<form:label path="email">Email:  </form:label>
<form:input type="text" path="email"/>
<form:errors class="text-danger" path="email"/>
</div>

<div class="form-group">
<form:label path="password">Password: </form:label>
<form:input type="password" path="password"/>
<form:errors class="text-danger" path="password"/>
</div>
<input type="submit" value="Register" class="btn btn-success">

</form:form>
</div>
</div>
</div>
</body>
</html>