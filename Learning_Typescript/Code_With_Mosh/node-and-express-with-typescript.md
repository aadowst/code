_Introduction_

Node cannot execute TS
Options:

	Use compiler to transpile to js by entering "tsc" and then using node to run the js file

	Use ts-node (which combines the above steps into one)
	
To use ts-node in one project:

	in the terminal, enter "npm init -y" (to create basic package.json file)
	then enter, "npm i -D ts-node"
	in package.json, delete the "test" entry in scripts and add ' "start": "ts-node index.ts" '
	Execute the code by typing  "npm start"

To install ts-node globally (and avoid having to make a package.json file in each project folder)

	in the terminal type, "npm i -g ts-node"
	execute files by typing "ts-node FILENAME.ts"

_Setting up Express_

Install the following packages:
	"npm i express"
	"npm i -D typescript @types/node @types/express"

Create tsconfig (and make changes, based on requirements of project):
	"tsc --init"

Import express and set it up in index.ts
```js
import express from "express";
const app = express();
app.listen(8000, () => console.log("Server started"));
```

Install nodemon as development dependency:  "npm i -D nodemon"
In package.json, add/change the "start" script to "nodemon index.ts"  (nodemon uses ts-node under the hood)
Run server w/ "npm start"

_Creating a Basic Route_

Before the app.listen(), call app.get(), passing in the endpoint and a callback function

Example:
```js
app.get('/', (req, res) => {
	res.send("Hello World")
})
```

_Create a Router_

Create a routers folder
Create a router file (endPoint.ts)
In that file, import the router from express
instantiate an router object
Add middleware  to allow the app to use json:  "app.use(express.json())"
call the .get() method on the router object, passing in an endpoint and a callback function
make sure to export the router as a default

_Parsing Request Bodies_

create an interface in router module (convention:  CreateEndPointDto, where Dto stands for data transfer object)
for Post and Push requests, use the interface for type assertion
Once Dto is working, move it to a dtos folder

Example (/dtos/create-reminder.ts)
```js
export default interface CreateReminderDto {  title: string; }
```

_Build an API_

Add a models folder
Add a module that corresponds to the object required by the Dto

Example (/models/reminder.ts)
```js
export default class Reminder{
	id: number;
	isComplete: boolean;

	constructor(public title: string){
		this.id = Date.now()  //should really be id generated by the db, but this works
		this.isComplete = false
	}
}
```




