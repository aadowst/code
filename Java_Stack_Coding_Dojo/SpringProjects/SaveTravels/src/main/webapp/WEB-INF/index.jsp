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
<title>Save Travels</title>
</head>
<body>

<h1>Save Travels</h1>

<table>
<thead>
<tr>
<th>Expense</th>
<th>Vendor</th>
<th>Amount</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<c:forEach var="expense" items="${listOfExpenses }">
<tr>
<td><a href="/expenses/${expense.id}"><c:out value="${expense.name }" /></a></td>
<td><c:out value="${expense.vendor }" /></td>
<td><c:out value="${expense.amount }" /></td>
<td><a href="/expenses/${expense.id }/edit">edit</a>
<form action="/expenses/${expense.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form>
</td>
</tr>
</c:forEach>

</tbody>
</table>

<h1>Add an Expense</h1>
<form:form action="/expenses" method="POST" modelAttribute="expense">
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
<form:input path="amount" type="number"/>
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