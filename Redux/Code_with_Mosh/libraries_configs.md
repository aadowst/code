Testing Redux Apps

Libraries:
 Jest (local installation:  npm i jest, global installation:  npm i jest --global):  popular testing library built on top of jasmine

 TypeScript definitions for Jest (npm i @types/jest): brings Intellisense for jest for VSCode

Babel (npm i @babel/core @babel/preset-env babel-jest -D):  converts modern JS to backwards compatible code for legacy platforms/environments. installed as development dependencies

Axios-Mock-Adapter (npm i axios-mock-adapter -D): mocks a response from axios as a dev dependency

Configuration files:

In root project directory, add babel.config.json
```js
{
	"presets": ["@babel/preset-env"]
}
```
If local installation, check package.json and ensure the scripts object contains: "test": "jest"  or "jest --watch"

Additional Commands:
To setup jest to watch for changes in source code and automatically run when it detects them, in the terminal:  jest --watch

*Integration with React*

create react app:  npx create-react-app DIRECTORY_NAME
install redux & dependencies:  npm i redux @reduxjs/toolkit axios moment
install react-redux:  npm i react-redux (Mosh used @7.2)