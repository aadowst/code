Redux can be used with any front-end library
All state stored in the Store and makes data flow transparent and predictable
Includes 'time-travel debugging' where changes to state are logged and can be reenacted
Other tools (e.g. Log Rocket) can make it even easier to see where bugs arise

_Setting up IDE_

in project folder in terminal:  npm i
npm start
in browser, open localhost:9000

to uselodash:  
npm i lodash
import into index.js
initialize a variable as pipe() function with the desired functions as arguments in the order they should be used
call the variable, passing in the input

```js
import { compose, pipe } from 'lodash/fp'

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()
const transform = pipe(trim, toLowerCase, wrapInDiv)

let input = "    JavaScript    "
const result = transform(input)
```