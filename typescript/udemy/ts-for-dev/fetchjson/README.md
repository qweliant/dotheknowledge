# Typescript the COmplete Developers Guide

## Reflection 1 - 5 16 9:43 - Section 1
----

The chapter warns: 

> In the upcoming lecture, we will be installing axios to use in our demo project. There is currently a major bug that has broken the last three versions of axios since v1. Until this is officially resolved, you must install the last known working pre-v1 release: 
> 
> `npm install axios@0.27.2`

Clearly I wouldn't be satisfied with such a big red vague flag.

What happens when you run `npm install axios` then `tsc index.ts`?

Screenshot from 2023-05-16 09-48-34.png


https://stackoverflow.com/questions/57897050/a-computed-property-name-in-an-interface-must-refer-to-an-expression-whose-type

Your symbol level needs to be defined as a unique symbol, like so:

const level: unique symbol = Symbol();

Then modify your interface like this:

interface MyInterface {
    [level]?: string;
}


https://stackoverflow.com/questions/30439869/how-do-i-transpile-typescript-to-es6
--target es6

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

so add: 
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig.json to read more about this file */

		/* Basic Options */
		"target": "ES6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,

		/* Module Resolution Options */
		"moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
	}


https://stackoverflow.com/questions/51448376/whats-the-difference-between-tsc-typescript-compiler-and-ts-node
The main difference is that tsc transpile all the file according to your tsconfig.

Instead, ts-node will start from the entry file and transpile the file step by step through the tree based on the import/export.

https://stackoverflow.com/questions/63588714/node9374-warning-to-load-an-es-module-set-type-module
add the "type": "module" line in your package.json file

https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file
When you have "type": "module" in the package.json file, your source code should use import syntax. When you do not have, you should use require syntax; that is, adding "type": "module" to the package.json enables ES 6 modules. For more info, see here.