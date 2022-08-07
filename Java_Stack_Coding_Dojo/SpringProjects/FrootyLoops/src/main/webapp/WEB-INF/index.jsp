<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<html>
<head>
<meta charset="ISO-8859-1">
<title>Frooty Loops</title>
</head>
<body>
<div class="container">
<h1>Fruit Store</h1>
<div class="table">
<table>
<thead>
<tr>
<th>Name</th>
<th>Price</th>
</tr>
</thead>
<tbody>
<c:forEach var="fruit" items="${fruits }">
<tr>
<td><c:out value="${fruit.getName() }"></c:out> </td>
<td><c:out value="${fruit.getPrice() }"></c:out> </td>
</tr>
</c:forEach>
</tbody>
</table>

</div>
</div>
</body>
</html>