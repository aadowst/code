<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="/css/main.css"/>
<meta charset="ISO-8859-1">
<title>Read Share</title>
</head>
<body>

    
<h1>All Books</h1>
<table class="table">
    <thead>
        <tr scope="row">
            <th>ID</th>
            <th>Title</th>
            <th>Language</th>
            <th>Number of Pages</th>
        </tr>
    </thead>
    <tbody>
         	<c:forEach var="book" items="${books }">
         	<tr>
         	<td><c:out value="${book.id }"/> </td>
         	<td><a href="/books/${book.id }">
         	
         	<c:out value="${book.title }"/> </a></td>
         	<td><c:out value="${book.language }"/> </td>
         	<td><c:out value="${book.numberOfPages}"/> </td>
         	</tr>
         	</c:forEach>
    </tbody>
</table>


</body>
</html>