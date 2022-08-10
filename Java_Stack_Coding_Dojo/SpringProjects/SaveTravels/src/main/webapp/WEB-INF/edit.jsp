<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<title>Insert title here</title>
</head>
<body>
<a href="/expenses">Go back</a>
<h1>Edit an Expense</h1>
<form:form action="/expenses/${expense.id }" method="POST" modelAttribute="expense">
<input type="hidden" name="_method" value="PUT">
<div>
<form:label path="name">Expense Name:</form:label>
<form:errors path="name" class="text-danger"/>
<form:input path="name" />
</div>

<div>
<form:label path="vendor">Vendor:</form:label>
<form:errors path="vendor" class="text-danger"/>
<form:input path="vendor" />
</div>

<div>
<form:label path="amount">Amount:</form:label>
<form:errors path="amount" class="text-danger"/>
<form:input path="amount" type="number" />
</div>

<div>
<form:label path="description">Description:</form:label>
<form:errors path="description" class="text-danger"/>
<form:input path="description" />
</div>

<input type="submit" />
</form:form>
</body>
</html>