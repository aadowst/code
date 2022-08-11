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
<title>Search</title>
</head>
<body>
<nav class="navbar navbar-light bg-light sticky-top">
<div>Songs by artist:  <c:out value="${listOfSongs[0]['artist'] }"/></div>
  <form class="form-inline"  action="/search/?" method="get">
  <div class="input-group">
    <input class="form-control mr-sm-2" type="text" name="artist" placeholder="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">New Search</button>
  </div>
  </form>
  <a href="/dashboard">Dashboard</a>
</nav>
<div class="main d-flex justify-content-center">

<table class="table table-striped w-75">
  <thead>
    <tr>
      <th>Name</th>
      <th>Rating</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  <c:forEach var="song" items="${listOfSongs }">
    <tr>
      <th scope="row">
      <a href="/songs/${song.id}"><c:out value="${song.title }" /></a>
      </th>
      <td><c:out value="${song.rating }" /></td>
      
      <td><form action="/songs/${song.id}/destroy" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
	</form></td>
    </tr>
</c:forEach>
  </tbody>
</table>
</div>

</body>
</html>