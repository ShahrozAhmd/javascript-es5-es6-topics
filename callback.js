//this block of code waits for for 5 seconds
// setTimeout(() => {
//     console.log('i have to wait for a second');
// }, 5000);

//this code runs immediately
// console.log('i dont have to wait');

// let posts = [{ title: "post One" }, { title: "post Two" }];

// function getPost() {
//   setTimeout(() => {
//     for (var i = 0; i < posts.length; i++) {
//       var output = "";
//       output += `<li>${posts[i].title}</li>`;
//       document.write(output);
//     }
//   }, 2000);
// }

// function addPost(post) {
//   posts.push(post);
// }

// getPost();

// addPost({ title: "post Three" });
// function ageChecker(age){
//     if (age){
//         console.log(age);
//     }

// }

// function greetings(name,age,callback){
//   console.log(name);
//     callback(age);
// }

// greetings('shahroz',12,ageChecker);


//concept of callback or we say higher order function.

//apply different string methods to the given text:

function getStr(str,fn){
    var strResult = fn(str);
    console.log(strResult);
};

function endWith(el){
    return el.endsWith('z');
}

getStr('shahroz',endWith);

//return a function:


