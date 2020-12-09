var std = {
    name: 'shahroz',
    age: 23,
    semester: 5,
    courses: ['PP','CA','HCI','ECOM','CCNA','AM' ]
};
std  = JSON.stringify(std);
console.log(typeof std); // in json format
std = JSON.parse(std);
console.log(typeof std); // in object format







