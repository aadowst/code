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
<title>Dojos and Ninjas</title>
</head>
<body>
<div class="container d-flex">
<div class="box m-2">
<h2>New Dojo</h2>
<form:form action="/dojos/create" method="POST" modelAttribute="dojo" class="m-2">

<form:label path="name">Name:</form:label>
<form:errors path="name" class="text-danger"/>
<form:input path="name" />
<input type="submit" />
</form:form>
<h3><a href="/ninjas/new">Add a new ninja!</a></h3>
</div>
<div class="box m-2">
<h2>Select Dojo</h2>
<ul>
<c:forEach var="dojo" items="${listOfDojos }">
<li><a href="/dojos/${dojo.id }"><h3> <c:out value="${dojo.name}" /> </h3></a>
</li>
</c:forEach>

</ul>

</div>

</div>


</body>
</html>