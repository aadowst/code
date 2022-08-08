<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="/css/newfile.css">
<meta charset="ISO-8859-1">
<title>Omikuji</title>
</head>
<body>
<h1>Here's Your Omikuji</h1>
<div class="card" style="width: 18rem;">
In <c:out value="${number }"/> years, you will live in <c:out value="${city }"/> with <c:out value="${person}"/> as your room mate,  <c:out value="${hobby }"/>. The next time you see a <c:out value="${organism }"/>, you will have good luck. Also, <c:out value="${saying }"/>.

<br />
</div>
<a href="/omikuji">Go Back</a>
</body>
</html>