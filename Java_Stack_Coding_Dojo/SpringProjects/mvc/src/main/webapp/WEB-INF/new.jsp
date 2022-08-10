<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>New Book</h2>
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


</body>
</html>