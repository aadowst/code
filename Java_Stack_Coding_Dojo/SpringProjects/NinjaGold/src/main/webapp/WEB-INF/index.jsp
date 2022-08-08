<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>  
<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<head>
<meta charset="ISO-8859-1">
<title>Ninja Gold Game</title>
</head>
<body>
<div class="container">
<div class="header">
Your Gold:  <c:out value="${gold }"></c:out>
</div>
<div class="body">


<form action="/submit" method="Post">
<h2>Farm</h2>
<input type="hidden" name="location" value="farm" />
<label for="farm">(earns 10-20 gold)</label><br />
<input type="submit" value="Find Gold" />
</form>

<form action="/submit" method="Post">
<h2>Cave</h2>
<input type="hidden" name="location" value="cave" />
<label for="cave">(earns 5-10 gold)</label><br />
<input type="submit" value="Find Gold" />
</form>

<form action="/submit" method="Post">
<h2>House</h2>
<input type="hidden" name="location" value="house" />
<label for="house">(earns 2-5 gold)</label><br />
<input type="submit" value="Find Gold" />
</form>

<form action="/submit" method="Post">
<h2>Quest</h2>
<input type="hidden" name="location" value="quest" />
<label for="quest">(earns/takes 0-50 gold)</label><br />
<input type="submit" value="Find Gold" />
</form>

</div><!-- end of main -->
<div class="activities">
<h3>Activities</h3>
<c:out value="${activity}"/>
<c:forEach var="activity" items="${activities }">

<span class="${fn:contains(activity, 'lost') ? 'lost' : 'earned' }"> 
<c:out value="${activity}"/><br />
</span>

</c:forEach>
</div><!-- end of activities -->
</div>

</body>
</html>