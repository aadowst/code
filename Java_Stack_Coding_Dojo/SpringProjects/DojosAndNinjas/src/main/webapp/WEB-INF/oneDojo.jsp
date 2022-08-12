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
<title>Dojo Page</title>
</head>
<body>
<h1><c:out value="${dojo.name }"> Location Ninjas</c:out> </h1>

<table>
<thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Age</th>

</tr>
</thead>
<tbody>
<c:forEach var="ninja" items="${dojo.ninjas }">
<tr>
<td><c:out value="${ninja.firstName }" /></td>
<td><c:out value="${ninja.lastName}" /></td>
<td><c:out value="${ninja.age}" /></td>
</tr>
</c:forEach>

</tbody>
</table>

</body>
</html>