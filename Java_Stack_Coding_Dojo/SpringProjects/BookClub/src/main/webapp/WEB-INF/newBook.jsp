<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<meta charset="ISO-8859-1">
<title>Add a Book</title>
</head>
<body>
	<div class="d-flex justify-content-between align-items-center m-4">
		<div>
			<h2>Add a Book to Your Shelf</h2>
		</div>
		<div>
			<a href="/books">back to the shelves</a>
		</div>
	</div>

	<div class="form col-4 m-4">
		<form:form action="/books/create" method="post" modelAttribute="book">
			<form:input type="hidden" path="owner" value="${user.id }" />

			<div class="form-group d-flex justify-content-between my-2">
				<form:label path="title" class="w-25">Title:  </form:label>
				<form:input type="text" path="title" class="w-75" />
			</div>
			<form:errors class="text-danger" path="title" />

			<div class="form-group d-flex justify-content-between my-2">
				<form:label path="author" class="w-25">Author:  </form:label>
				<form:input type="text" path="author" class="w-75" />
			</div>
			<form:errors class="text-danger" path="author" />

			<div class="form-group d-flex justify-content-between my-2">
				<form:label path="thoughts" class="w-25">My Thoughts: </form:label>
				<form:textarea path="thoughts" class="w-75" />
			</div>
			<form:errors class="text-danger" path="thoughts" />
			<div>
				<input type="submit" value="Submit" class="btn btn-info">
			</div>
		</form:form>
	</div>

</body>
</html>