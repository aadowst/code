<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <!-- CSS only -->
          <!-- CSS only -->
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          <link rel="stylesheet" type="text/css" href="/css/style.css">
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          <title>Create an Event</title>
        </head>

        <body>
          <!-- Navbar -->
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Container wrapper -->
            <div class="container-fluid">
              <!-- Toggle button -->
              <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>

              <!-- Collapsible wrapper -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navbar brand -->
                <a class="navbar-brand mt-2 mt-lg-0" href="/events">
                  <img src="/images/WWLogo.png" height="85" alt="" loading="" id="logo" class="rounded-circle" />
                </a>
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="/events">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/events/new">Post an Event</a>
                  </li>
                </ul>
                <!-- Left links -->
              </div>
              <!-- Collapsible wrapper -->

              <!-- Right elements -->
              <div class="d-flex align-items-center">
                <!-- Icon -->
                <a class="text-reset me-3" href="#">
                  <i class="fas fa-shopping-cart"></i>
                </a>

                <!-- Notifications -->
                <!--       <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div> -->

                <!-- right drop down menu -->
                <div class="btn-group m-2 my-menu">
                
                  <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false" id="nav-btn">
                    Menu
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="/events">View all Events</a>
                    <a class="dropdown-item" href="/clubs">View all Clubs</a>
                    <a class="dropdown-item" href="/clubs/new">Create a Club</a>
                    <a class="dropdown-item" href="/events/new">Create an Event</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/logout">LogOut</a>
                  </div>
                </div>
				
                <a class="btn btn-secondary" href="/logout" role="button">LogOut</a>
                <a class="btn btn-secondary m-2" href="/" role="button" id="login_btn"> LogIn/Register</a>
				<a href="/events"><button class="btn btn-warning ">Cancel</button></a>
              </div>
              <!-- Right elements -->
            </div>
            <!-- Container wrapper -->
          </nav>
          <!-- Navbar -->
          <h1 class="header test mx-4">hey, 
            <c:out value="${user.userName }" />
          </h1>
          <h1 class="header text-center my-2">Create An Event!</h1>

          <!-- JavaScript Bundle with Popper -->


          <div class="container my-2">



            <div class="content d-flex justify-content-around align-items-center">
              <div class="content-left col-4 mx-5" >
                <div id="googleMap" style="height:400px;"></div>

              </div>
              <div class="content-right form col-8">

                <h6>Enter a Start Location (and/or click on the map to move the marker)</h6>
                <form id="location-form" class="d-flex my-2">
                  <input type="text" class="form-control mx-2" id="location-input" value="${user.clubs[0].location}">
                  <button class="btn btn-primary" type="submit">Enter</button>
                </form>

                <form:form action="/events/create" method="post" modelAttribute="event">
                	<form:input type="hidden" path="latLng" id="latLng" value="${user.clubs[0].location}"></form:input>
					
                  <div class="form-group d-flex justify-content-between my-2">
                  <form:label path="hostedBy" class="w-25">Hosted by: </form:label>
                  <form:select path="hostedBy" type="number" class="w-75">
                    <c:forEach var="club" items="${joinedClubs }">
                      <form:option value="${ club.id }" type="number">
                        <c:out value="${club.name }" />
                      </form:option>
                    </c:forEach>
                    <form:errors path="hostedBy" class="text-danger" />
                  </form:select>
                  </div>
                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="name" class="w-25">Event Name </form:label>
                    <form:input type="text" path="name" class="w-75" />
                  </div>
                  <form:errors class="text-danger" path="name" />

                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="date" class="w-25">Date </form:label>
                    <form:input type="date" path="date" class="w-75" />
                  </div>
                  <form:errors class="text-danger" path="date" />

                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="time" class="w-25">Time </form:label>
                    <form:input type="time" path="time" class="w-75" />
                  </div>
                  <form:errors class="text-danger" path="time" />

                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="openToPublic" class="w-25">Open to Public? </form:label>
                    <form:checkbox path="openToPublic" class="w-75" value="true" />

                  </div>
                  <form:errors class="text-danger" path="openToPublic" />

                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="location" class="w-25">Location </form:label>
                    <form:input type="text" path="location" class="w-75" />
                  </div>
                  <form:errors class="text-danger" path="location" />

                  <div class="form-group d-flex justify-content-between my-2">
                    <form:label path="description" class="w-25">Description </form:label>
                    <form:textarea path="description" class="w-75" />
                  </div>
                  <form:errors class="text-danger" path="description" />

                  
                  <div class="form-group d-flex my-4">

                    <input type="submit" value="Submit" class="btn btn-info  mx-2">
          
                  </div>
                </form:form>
                

              </div>
            </div>


          </div>


          <script src="/js/script.js"></script>
          </script>
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA246nlIjYYGu89FdDHR5g0NiJbIyr9L3k&callback=initMap"></script>

          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
            integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
            crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
            integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
            crossorigin="anonymous"></script>
        </body>

        </html>