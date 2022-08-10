<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Show Expense</title>
</head>
<body>

<a href="/expenses">Go back</a>
<h1>Expense Details</h1>
<h3>Expense Name:  <c:out value="${expense.name }"/></h3>
<h3>Expense Description:  <c:out value="${expense.description }"/></h3>
<h3>Vendor:  <c:out value="${expense.vendor }"/></h3>
<h3>Amount Spent:  <c:out value="${expense.amount }"/></h3>
</body>
</html>