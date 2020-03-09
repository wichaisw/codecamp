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




function timedABCD(index) {
  return new Promise(function (fulfill, reject) {
    // if (typeof index == "number") {
      setTimeout(function(){
        fulfill(index);
      }, 1000)
    // } 
  });
}

// then method
// timedABCD("a")
//   .then(function(result) {
//     console.log(result);
//     return timedABCD("b");
//   })
//   .then(function(result) {
//     console.log(result);
//     return timedABCD("c");
//   })
//   .then(function(result) {
//     console.log(result);
//     return timedABCD("d");
//   })
//   .then(function(result) {
//     console.log(result);
//   })
  // .catch(function(err) {
  //   console.log(err);
  // });


  // async await
// async function awaitABCD() {
//   const input1 = await timedABCD("a")
//   const input2 = await timedABCD("b")
//   const input3 = await timedABCD("c")
//   const input4 = await timedABCD("d")
//   console.log(input1, input2, input3, input4)
// }
// awaitABCD()

// async await loop
let abcdArr = ["a", "b", "c", "d"]
  async function awaitABCD() {
    for (i=0; i<4; i++) {
      console.log(await timedABCD(abcdArr[i]))
    }
  }
  awaitABCD();
