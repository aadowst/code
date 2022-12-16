_Creating React App_

In the terminal, type "npx create-react-app APP_NAME --template typescript"
open folder in VSCode

_Adding Bootstrap_

In the terminal, type "npm i bootstrap"
open src > index.tsx
above the local css import (line 3), import bootstrap:  "import 'bootstrap/dist/css/bootstrap.css';"
Delete everything from App.css
Add css reset as desired
in App.tsx, delete everything inside of the main div
Run the application by typing:  "npm start"

_Creating Components_

Add components folder in src
Create component (ComponentName.tsx)
Type "rsf" to get boilerplate for a React stateless function
Create an interface for the props (to avoid implicit any compilation error) with format:  ComponentNameProps
This interface may require other interfaces, so create them if necessary. 

If these interfaces will be used by other components

	Create a separate folder in src (models, entities, types or interfaces are common naming structures)

	Create a TypeScript file with the name of the interface (camelCase or PascalCase are both used)

	Copy interface to the module and export it as a default

	Import the interface into the component file

set the type of the props paramenter to ComponentNameProps
Destructure props:

	in parameter signature. Example:

```js
function ReminderList({items}: ReminderListProps): JSX.Element {
	return (
		<div> //code 	</div>
	);
}
```

	or as a constant in the function body. Example:

```js
function ReminderList(props: ReminderListProps): JSX.Element {
let {items} = props
	return (
		<div> //code 	</div>
	);
}
```
Add JSX.Element as the return type (not strictly necessary, but good practice)
Add the component to App.tsx, passing in any required props

_State Management_

If passing a value into useState hook, the type will be inferred
If not, specify the generic type, using angle brackets and pass an empty array into the useState hook to avoid compilation error

_Calling the Backend_

Http requests should include the type of data that is expected to be returned
Export an instance of the class
Suggestion:  make a service folder and file to handle these requests and then import the service

```js
import axios from "axios";
import Reminder from "../interfaces/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

	async getReminders(){
		const response = await this.http.get<Reminder[]>('/todos')
		return response.data
	}

	async addReminder(title: string){
		const response = await this.http.post<Reminder>('/todos', {title})
		return response.data
	}

	async removeReminder(id: number){
		const response = await this.http.delete('/todos/' + id)
		return response.data
	}
}

export default new ReminderService()
```

_The useEffect Hook_

There are no changes with useEffect (remember not to include async functions in useEffect, though. Instead, create an async function separately and call that function in useEffect)

_Handling Events_

When passing onClick or other callbacks as props, make sure to adjust the shape of the ComponentNameProps interface
Otherwise, there is no difference

_Form_

Building a form is the same
However, a onSubmit handler, which takes in the event, needs the type React.FormEvent in its paramater