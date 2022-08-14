<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
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
<title>Read Share</title>
</head>
<body>
	<div class="col-12">
		<div class="d-flex justify-content-between align-items-center m-4">
			<div>
				<h2>
					Welcome
					<c:out value="${user.name }" />
				</h2>
			</div>
			<div>
				<a href="/logout">logout</a>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-center m-4">
			<div>Books from everyone's shelves:</div>
			<div>
				<a href="/books/new">+ Add to my shelf!</a>
			</div>
		</div>
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Author Name</th>
						<th>Posted By</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="book" items="${listOfBooks }">
						<tr>
							<th scope="row"><c:out value="${book.id }" /></th>
							<td><a href="/books/${book.id }"><c:out
										value="${book.title }" /></a></td>
							<td><c:out value="${book.author }" /></td>
							<td><c:out value="${book.user.name }" /></td>
						</tr>

					</c:forEach>

				</tbody>

			</table>
		</div>


	</div>
</body>
</html>