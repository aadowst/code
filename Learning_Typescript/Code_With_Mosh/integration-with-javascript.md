_Introduction_

By default, pure JS is ignored by the TS compiler
To alllow, in tsconfig.json, under JavaScript Support, comment in "allowJs"
Make sure the module format (in tsconfig.json) is commonJS

_Enable Type Checking w/ JS Code_

In tsconfig.json, under JavaScript Support, comment in "checkJs" (this will provide basic type checking, but not as extensive as pure TS)
Depending on the number of JS imports, it might be helpful to comment out "noImplicitAny" under Type Checking (esp. if there are a lot of compiler errors)
Also, at the top of a file that we want the compiler not to check, type "// @ts-nocheck" to completely skip checking it (it will still compile, though)

_Describing Types using JSDoc_

The above 'solutions' are ok for short term, but allow compilation erros (such as calling functions w/o passing arguments)
A better solution is to use JSDoc immediately above the export
Type "/**" and VSCode will autocomplete
Update the type of the parameter by specifiying it between the curly braces
Add the return type in braces on the next line
Compile the code and there shouldn't be a 'no implicit any type' error

JSDoc can and should also be used to provide details about the function

Example
```js
// JS file with function to be exported

/**
 * Calculates income tax based on a fixed percentager
 * @param {number} income - net income after qualifying expenses are considered
 * @return {number} 
 */
export default function calculateTax(income){
	return income * 0.2
}
```

_Creating Declaration Files_

If you can't or don't want to modify JS files to add JSDoc, declaration files can be used (equivalent to a header file in C)
Format:  jsfilename.d.ts
use the "export" and "declare" keywords and then write the signature for the function in the js file
make sure to export and declare all functions/classes from target modules

```js
// in jsfilename.d.ts
export declare function calculateTax(income: number): number;
```

_Using Third Party JS Libraries_

Some libraries (like Chalk) alrady come with declaration files, so they are ready to be incorporated with TS
Other libraries (like lodash) are pure JS and don't have declaration files or JSDoc

For the latter:
Use the Definitely Typed GitHub repository, which has declaration files for all popular JS libraries
To install, open terminal and type "npm i --save-dev @types/NAMEOFLIBRARY"

Notes:
	--save-dev means this is just going to be a development dependency and won't be need when deployed (because code will already be compiled into JS)

	-D is a shortcut that does the same as --save-dev
