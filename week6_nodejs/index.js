// use module File System
const fs = require("fs");
console.log(typeof fs);

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
function addSync(a, b, callbackFn) {
  callbackFn(a + b);
};

addSync(2, 3, (result) => {
  console.log(result);
});

// multiply function
function mulSync(a, b, callback) {
  callback(a*b);
};

mulSync(4, 6, function(multiplied) {
  console.log(multiplied);
});

// max function
function maxSync(a, b, callback) {
  if (a > b) {
    callback(a);
  } else {
    callback(b);
  }
};

maxSync(4, 6, function(result) {
  console.log(result);
});