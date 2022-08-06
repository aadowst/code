<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Time</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
<h2 class="time"><c:out value="${ time }"/> </h2>
<script type="text/javascript" src="/js/timescript.js"></script>
</body>
</html>