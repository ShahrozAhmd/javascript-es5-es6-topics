// //IMPORTING DEFAULT EXPORT CLASS

import Person from "./exporter.js";

let ins = new Person('shahroz',26);
console.log(ins.name);

import variableForExport from "./exporter.js"
console.log(variableForExport);

import show from './exporter.js'
show();

// IMPORTING NAMED EXPORT

import {show, variableForExport, Person} from "./exporter.js"
show();
console.log(variableForExport);
let personeOne = new Person('shahroz','age');
console.log(personeOne.greetings('shahroz'));

// importing all at once:
import* as temporaryObject from "./exporter.js"
console.log(temporaryObject);
temporaryObject.show();
console.log(temporaryObject.variableForExport);
let Ins = new temporaryObject.Person('shahroz',23);
console.log(Ins.name);


// //IMPORT BOTH NAMED AND DEFAULT EXPORTS AT ONE TIME:

import Person,{show,variableForExport} from "./exporter.js";

// /*
//         CALL THEM HERE
// */

