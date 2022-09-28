<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
	crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/css/style.css">


<meta charset="ISO-8859-1">
<title>Weekend Walkers</title>
</head>
<body>
	<div class="container">
		<div class="d-flex my-2">

			<h2>Welcome Weekend Walkers</h2>



		</div>
<div class="content d-flex">


		<div class="main d-flex col-9 justify-content-between">
			<div class="register col-4">
				<h4>New Walker</h4>
				<form:form action="/register" method="post" modelAttribute="user">

					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="userName">User Name:  </form:label>
						<form:input type="text" path="userName" />
						<form:errors class="text-danger" path="userName" />
					</div>

					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="email">Email:  </form:label>
						<form:input type="text" path="email" />
						<form:errors class="text-danger" path="email" />
					</div>

					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="password">Password: </form:label>
						<form:input type="password" path="password" />
						<form:errors class="text-danger" path="password" />
					</div>


					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="confirm">Confirm PW: </form:label>
						<form:input type="password" path="confirm" />
						<form:errors class="text-danger" path="confirm" />
					</div>
					<div>
						<input type="submit" value="Register" class="btn btn-info">
					</div>
				</form:form>
			</div>

			<div class="login col-4">
				<h4>Login</h4>
				<form:form action="/login" method="post" modelAttribute="loginUser">
					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="email">Email:  </form:label>
						<form:input type="text" path="email" />
					</div>
					<form:errors class="text-danger" path="email" />
	
					<div class="form-group d-flex justify-content-between my-2">
						<form:label path="password">Password: </form:label>
						<form:input type="password" path="password" />
					</div>
					<form:errors class="text-danger" path="password" />
					<div>
						<input type="submit" value="Login" class="btn btn-success">
					</div>
	
				</form:form>
			</div>
		</div>




	</div>

</div>

	<script
		src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
		integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
		integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
		crossorigin="anonymous"></script>

</body>
</html>