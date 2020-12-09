// var aValue = true;

// var myPromise = new Promise((res, rej) => {
//   if (aValue) {
//     res('resolve');
//   } else {
//     rej('reject');
//   }
// });

// myPromise.then((message)=>{
// console.log(message);
// });

// myPromise.catch((message)=>{
//   console.log(message);
//   });


// var promise1 = new Promise((res, rej) => {
//   if (aValue) {
//     res("resolve");
//   } else {
//     rej("reject");
//   }
// })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(message => {
//     console.log(message);
//   });


var promiseA = new Promise((res,rej)=>{
  res('PromiesA Resolve');
});

var promiseB = new Promise((res,rej)=>{
  res('PromiesB Resolve');
});

var promiseC = new Promise((res,rej)=>{
  res('PromiesC Resolve');
});


Promise.race([
  promiseA,
  promiseB,
  promiseC
]).then((message)=>{
  console.log(message);

});


Promise.all([
  promiseA,
  promiseB,
  promiseC
]).then((message)=>{
  console.log(message);

});
