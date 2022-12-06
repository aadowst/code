_Set up compiler_

1. Open terminal and navigate to directory
2. Type
```
tsc --init
```
3. Close terminal and open tsconfig.json in VS code
4. Change target to more modern js, if desired (less older browser support, but access to ECMA6)
5. Add src subdirectory
6. In Modules, change rootDir to "./src"
7. In Emit, change:

	a. outDir to "./dist" (short for distributable)

	b. comment in removeComments (makes compiled js code shorter)

	c. comment in noEmitOnError (prevents generation of js, if there are errors)

_Debugging_

Ideally, only open project directory in VScode

1. In tsconfig.json, under Emit comment in sourceMap (maps how the ts source code is transpiled into js; is read by debugging programs)
2. Add a break in a line in the ts code
3. In Run and Debug, click "create a launch.json file" and open the file with node.js
4. Add a new line under program:
```
"preLaunchTask": "tsc: build - tsconfig.json",
//note:  more of the path may need to be added
```

5. Back in the Run and Debug panel, click "Launch Program" or type F5

