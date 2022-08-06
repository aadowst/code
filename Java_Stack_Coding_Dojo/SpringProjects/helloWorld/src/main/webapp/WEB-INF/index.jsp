<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>
<h1>Two plus two is: </h1>
<h2><c:out value="${2+2}"/></h2>

<h2>My name is <c:out value="${firstname}"/> <c:out value="${lastname}"/></h2>
	<script type="text/javascript" src="/js/script.js"></script>
</body>
</html>