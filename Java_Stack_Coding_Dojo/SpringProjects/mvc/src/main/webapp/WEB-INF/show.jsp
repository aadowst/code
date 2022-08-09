<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${book.title }"/></title>
</head>
<body>
<h1><c:out value="${book.title }"/></h1>
<h3>Description:  <c:out value="${book.description }"/></h3>
<h3>Language:  <c:out value="${book.language }"/></h3>
<h3>Number of Pages:  <c:out value="${book.numberOfPages }"/></h3>


</body>
</html>