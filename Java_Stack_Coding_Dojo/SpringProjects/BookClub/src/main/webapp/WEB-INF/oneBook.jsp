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
			<h2>
				<c:out value="${book.title }"></c:out>
			</h2>
		</div>
		<div>
			<a href="/books">back to the shelves</a>
		</div>
	</div>
	<div class="main m-4">
		<c:choose>
			<c:when test="${user.id == book.owner.id }">
				<h5>
					You read <span style="font-style: italic;"><c:out
							value="${book.title }" /></span> by
					<c:out value="${book.author }" />
				</h5>
				<h5>Here are your thoughts:</h5>
			</c:when>
			<c:otherwise>

				<h5>
					<c:out value="${book.user.name }" />
					read <span style="font-style: italic;"><c:out
							value="${book.title }" /></span> by
					<c:out value="${book.author }" />
				</h5>
				<h5>
					Here are
					<c:out value="${book.user.name }" />
					's thoughts:
				</h5>
			</c:otherwise>
		</c:choose>

		<div class="m-4 border border-dark col-3 p-2">
			<p style="font-style: italic;">
				<c:out value="${book.thoughts }" />
			</p>
		</div>

		<c:if test="${user.id == book.owner.id }">
			<a href="/books/${book.id}/edit"><button class="btn btn-primary"
					type="button">Edit</button></a>
		</c:if>

	</div>

</body>
</html>