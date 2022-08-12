<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Ninja</title>
</head>
<body>
<h1>New Ninja</h1>

<form:form action="/ninja/create" method="POST" modelAttribute="expense">
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

<form:select path="dojo">
	<c:forEach var="oneDojo" items="${listOfDojos }">
	<form:option value="oneDojo.id"><c:out value="${oneDojo.name }"/></form:option>
	</c:forEach>
</form:select>
</div>

<input type="submit" />
</form:form>

</body>
</html>