const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach:

// companies.forEach((iterator) => {
//   console.log(iterator); //objects
// });

//filter:

//  var filtered = companies.filter(arg =>arg.category === 'Auto');
// console.log(filtered);


//Map:
//  var filtered = companies.map(arg =>arg.category);
// console.log(filtered);

//Sort:

let arrOfNumbers = [1, 3, 5, 6, 19, 34, 24, 34, 56, 78, 98, 87, 79, 65];
let arrOfStr = ['a', 'b', 'A', 'B', 'dog', 'cat'];
let hetroArr = ['a', 'b', 'A', 'B', 'dog', 'cat', 1, 3, 5, 6, 19, 34, "65", "79", "87", "98"];
let arrOfNumAsStr = ["65", "79", "87", "98", "78", "56","34", "24", "34", "19", "6", "5", "3", "1" ];

console.log(arrOfNumbers.sort());
console.log(arrOfStr.sort());
console.log(hetroArr.sort());
console.log(arrOfNumAsStr.sort());


//function to convert numbered array to str
// let convertTStr = () =>{
//   var converted =[];
//   for (const item of arrOfNumbers) {
//       converted.unshift(`${item}`);
//   }
//   return converted;
// };

// console.log(convertTStr());