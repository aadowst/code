_Introduction_

Modules are used to split code into different files based on purpose

_Exporting and Importing_

To export a class, the keyword "export" can be added as a prefix.
In another file, import the file with "import { name } from './module'"

Notes:

	no extensions are used (ex: .ts)

	the file path is relative and ".." to go up a directory

	when {} is selected, typig ctrl + space will give all import options, if the path of the directory is known

	if a class needs to be renamed, use the "as" keyword

	multiple classes can be imported

	ctrl + . will provide quick fix suggestions (helpful for importing classes or moving classes to their own files)



```js
//in module with class(es) to be exported
export class Circle {
	constructor(public radius: number){}
}

export class Square {
	constructor(public width: number){}
}

//in module with class to be imported
import {Square, Circle as MyCircle} from "./shapes"
```

_Module Formats_

Modules are natively supported in ES6 (ES2015). Selecting the module as this means the import/export js code will look just like the ts code.


older format:  in commonjs, an object called exports is created (in index.ts), then classes are added as properties to the exports object in the other modules. back in the index.ts file, the require function is used to call the other module.

commonjs example:
```js
//index.js
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
let circle = new shapes_1.Circle(1);
console.log(circle.radius);

//shapes.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(width) {
        this.width = width;
    }
}
```

_Default Exports_

If goal is to only export one thing from a module, use default export (use case:  there are other objects in the module, but those are only needed w/in the module to implement it)
Curly braces are not needed to import the default export

```js
//export module
export default class Store {}

//import module
import Store from './storage'
```

_Wildcard Exports_

To import all classes form the same module, use a wildcard and "as" keyword

```js
import * as Shapes from "./shapes"

let square = new Shapes.Square(4)
```

_Re-exporting_

With re-exporting, a single module can combine the exports of multiple modules
All objects to be exported are put in separate files in the same directory with an index.ts
The index.ts imports the objects from the separate files and then exports them.
Now, all modules from the directory can be accessed through the index file


```js
//Shapes directory has separated modules for each shape
// src/shapes/index.ts
import Circle from "./Circle"
import Square from "./Square"
export {Circle, Square}

// src/index.ts
import {Circle, Square} from "./shapes/index"
```

Example with multiple shorthands
```js
//Shapes directory has separated modules for each shape
// src/shapes/index.ts
export {Circle} from "./Circle"
export {Square} from "./Square"

// src/index.ts
// Note:  the index module does not need to be specified (if "moduleResolution": "node" under Modules is commented in)
import {Circle, Square} from "./shapes"
```