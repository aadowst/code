<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Omikuji</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script type="text/javascript" src="/js/script.js"></script>
</head>
<body>
<h1>Send an Omikuji</h1>
<form action="/omikuji/submit" method="post">
<label for="number">Pick any number from 5 to 25</label>
<input class="form-control" type="number" name="number"/>
<label for="city">Enter the name of any city</label>
<input class="form-control"type="text" name="city"/>
<label for="person">Enter the name of any real person</label>
<input class="form-control"type="text" name="person"/>
<label for="hobby">Enter professional endeavor or hobby</label>
<input class="form-control"type="text" name="hobby"/>
<label for="organism">Enter any type of living thing</label>
<input class="form-control"type="text" name="organism" />
<label for="saying">Say something nice to someone</label>
<input class="form-control"type="text" name="saying" />
<label for="send">Send and show a friend</label>
<input type="submit" value="Send" name="send" class="form-control"/>

</form>
</body>
</html>