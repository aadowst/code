<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<title>Details</title>
</head>
<body>
<div class="nav d-flex justify-content-end m-4">
<a href="/dashboard">Dashboard</a>
</div>
<div class="container d-flex justify-content-center">

<div class="main w-75">

  <div class="input-group m-2">
<span class="w-50">Title</span>  <span><c:out value="${song.title }"/></span>
</div>

  <div class="input-group m-2">
<span class="w-50">Artist</span>  <span><c:out value="${song.artist }"/></span>
</div>

  <div class="input-group m-2">
<span class="w-50">Rating (1-10)</span>  <span><c:out value="${song.rating }"/></span>
</div>

<form action="/songs/${song.id}/destroy" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form>



</div>
</div>


</body>
</html>