// use module File System
// const fs = require("fs");
// console.log(typeof fs);

// create codecamp.txt file, add data in the file
// fs.writeFileSync("codecamp.txt","Hello, world!");
// fs.appendFileSync('codecamp.txt', "Hello, Codecamp.")


// let content = fs.readFileSync("codecamp.txt", "UTF-8");
// console.log(content);
// alternative way 
// let content = fs.readFileSync("codecamp.txt", {
//   encoding: "utf-8"
// });
// console.log(content);

// add function
// function addSync(a, b, callbackFn) {
//   callbackFn(a + b);
// };

// addSync(2, 3, (result) => {
//   console.log(result);
// });

// // multiply function
// function mulSync(a, b, callback) {
//   callback(a*b);
// };

// mulSync(4, 6, function(multiplied) {
//   console.log(multiplied);
// });

// // max function
// function maxSync(a, b, callback) {
//   if (a > b) {
//     callback(a);
//   } else {
//     callback(b);
//   }
// };

// maxSync(4, 6, function(result) {
//   console.log(result);
// });


// setTimeout callback hell
// setTimeout(function(){
//   console.log("a");
//   setTimeout(function(){
//       console.log("b");    
//       setTimeout(function(){
//           console.log("c");
//           setTimeout(function(){
//               console.log("d");
//           }, 1000);       
//       }, 1000);
//   }, 1000);
// },1000)


// const callABCD = () => {
//   let timerArr = ["a", "b", "c", "d"]
//   for (i=0; i<4; i++) {
//       console.log(timerArr[i])
//   };
// };

// setTimeout(function(){
//   callFn();
// }, 1000);

// Promise
// function isOver18(age) {
//   return new Promise(function (resolve, reject) {
//     if (age > 18) {
//       resolve("age is over 18")
//     } else {
//       reject("you're under arrest")
//     }
//   });
// };

// isOver18(12)
  // .then(function(result) {
  //   console.log(result)
  // })
  // .catch(function(err) {
  //   console.log(err)
  // })


let timerArr = ["a", "b", "c", "d"]

function callABCD(index) {
  return new Promise(function (fulfill, reject) {
    if (typeof index == "number") {
      setTimeout(function(){
        fulfill(index);
      }, 1000)
    } else {
      reject("error");
    }
  });
}

callABCD(0)
  .then(function(result) {
    console.log(timerArr[result]);
    return callABCD(1);
  })
  .then(function(result) {
    console.log(timerArr[result]);
    return callABCD(2);
  })
  .then(function(result) {
    console.log(timerArr[result]);
    return callABCD(3);
  })
  .then(function(result) {
    console.log(timerArr[result]);
  })
  .catch(function(err) {
    console.log(err);
  });

  
// for (i=0; i<4; i++) {
//   callABCD(i)
//     .then(function(result) {
//       console.log(timerArr[result])
//     })
// };


