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
<title>Add Song</title>
</head>
<body>
<div class="nav d-flex justify-content-end m-4">
<a href="/dashboard">Dashboard</a>
</div>
<div class="container d-flex justify-content-center">

<div class="main w-75">
<form:form action="/songs/create" method="POST" modelAttribute="song" class="form-inline">
  <div class="input-group">
<form:label path="title" class="w-25 my-2">Title</form:label>
<form:errors path="title" class="text-danger"/>
<form:input path="title" class="my-2" />
</div>

  <div class="input-group">
<form:label path="artist" class="w-25 my-2">Artist</form:label>
<form:errors path="artist" class="text-danger"/>
<form:input path="artist" class="my-2"/>
</div>

  <div class="input-group">
<form:label path="rating" class="w-25 my-2">Rating (1-10)</form:label>
<form:errors path="rating" class="text-danger"/>
<form:input path="rating" type="number" class="my-2" min="1" max="10"/>
</div>
<div class="d-flex justify-content-center">
<input type="submit" value="Add Song"/>
</div>
</form:form>


</div>
</div>
</body>
</html>