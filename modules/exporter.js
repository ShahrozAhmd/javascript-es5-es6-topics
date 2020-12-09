// DEFAULT EXPORT:

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetings(name){
        console.log('Hello '+name);
    }
};


let variableForExport = 'may i export?';
export default variableForExport;

export default function (){
    console.log('Hello');
};

// NAMED EXPORT:

 class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greetings(name){
        console.log('Hello '+name);
    }
};


let variableForExport = 'may i export?';
 variableForExport;

function show(){
    console.log('Hello');
};
//exported  both default and named
export default Person;
export {variableForExport,show};









