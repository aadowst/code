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
<meta charset="ISO-8859-1">
<title>Add Ninja</title>
</head>
<body>
<h1>New Ninja</h1>
<form:form action="/ninjas/create" method="POST" modelAttribute="ninja">
<div>
<form:select path="dojo" type="number">
	<c:forEach var="oneDojo" items="${listOfDojos }">
	<form:option value="${ oneDojo.id }" type="number"><c:out value="${oneDojo.name }"/></form:option>
	</c:forEach>
	<form:errors path="dojo" class="text-danger"/>
</form:select>
<div>
<form:label path="firstName">First Name:</form:label>
<form:errors path="firstName" class="text-danger"/>
<form:input path="firstName" />
</div>

<div>
<form:label path="lastName">Last Name:</form:label>
<form:errors path="lastName" class="text-danger"/>
<form:input path="lastName" />
</div>

<div>
<form:label path="age">Age:</form:label>
<form:errors path="age" class="text-danger"/>
<form:input path="age" type="number" />
</div>


</div>

<input type="submit" />
</form:form>

</body>
</html>