_Backend Server Instructions_

Create Project Folder
Create server Folder
cd into server folder:  npm init -y
install packages:  npm i express mongoose cors
Create Modularized Folder Structure (config, controllers, models, routes, service)
add server.js to server folder
Add mongoose.config.js to config file
In the other folders, add model.xxxxx.js, where xxxxx is the the name of the folder (ex. author.routes.js)

Set up mongoose.config file as shown in template (*update db name*)

Set up server.js file as shown in the template (*update model name*)
Run server:  nodemon server.js

Create model as shown in the template (*update model name and model attributes*)

Set up service as shown in template (*update Model name*)

Set up controller as shown in template (*update Model name*)

Set up routes as shown in template 

_Front End Server Instructions_
in project directory:  npx create-react-app client
cd into client directory and type:  npm i axios react-router-dom bootstrap (optional)
if using bootstrap, add to index js:  import 'bootstrap/dist/css/bootstrap.css';

add services folder to client > src.
add internalApiService.js to the services folder
Set up internalApiService.js as shown in template

Import BrowserRouter from react-router-dom to index.js and wrap App with BrowserRouter
Add view folder and create views

Set up AllModels as shown in template. Display data as required

Set up OneModel as shown in template. Display data as required

Set up New Model as shown in template. Display data as required

Update App.js as shown in the template

cd into client folder and type:  npm run start