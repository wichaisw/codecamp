// February 26, 2020: Day 16 JavaScript in-class labs

// Math Method exercise #1
// Solution #1
function random(min, max) {
  let result = Math.random() * max;
  while (result < min ) {
    result = Math.random() * max
  };
  return result;
};

// Solution #2
function randomAlt(min, max) {
  let result = Math.random() * max + min;
  if (result > max) {
    result = result - min;
  }
  return result;
};

// Solution #3
// max-min ได้ range ช่วงตัวเลขที่จะแรนดอม 
// + min เพื่อเซ็ตจุดเริ่มต้นของ min
function randomAlt2(min, max) {
  return ( Math.random() * (max - min) ) + min;
};

// String Method exercise #1

function ucFirst(string) {
  let ucString = string[0].toUpperCase() + string.slice(1);
  return ucString;
};

ucFirst("demon lord");

// String Method exercise #2
// arrow function
let checkSpam = (string) => (string.toLowerCase().includes("xxx") || string.toLowerCase().includes("viagra") ? true : false);

// function declaration
function checkSpam(string) {
  let haveXXX = string.toLowerCase().includes("xxx");
  let haveViagra = string.toLowerCase().includes("viagra");
  return ( haveXXX || haveViagra  ? true : false);
};

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

// String Method exercise #3
let truncate = (str, maxlength) => {
  let truncStr;
  if (str.length > maxlength) {
    truncStr = str.slice(0, (maxlength-1) ) + "..."
  } else {
    truncStr = str;
  };
  return truncStr
};

truncate("What I'd like to tell on this topic is:", 20); // "What I'd like to te…"
truncate("Hi everyone!", 20); // "Hi everyone!"

// String Method exercise #4
let  extractCurrencyValue = (string, rate) => parseFloat( string.slice(1) ) * parseFloat(rate);


// Array Exercise #3.11.1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4 เพราะ pass by reference


// Array Exercise #3.11.2
let styles = ["Jazz", "Blues"]; 
styles.push("Rock-n-Roll");     // ["Jazz", "Blues", "Rock-n-Roll"]
styles[1] = "Classics";         // ["Jazz", "Classics", "Rock-n-Roll"]
styles.shift();                 // ["Classics", "Rock-n-Roll"]
styles.unshift("Rap", "Reggae") // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]

// Array Exercise #3.11.3
// solution#1
function sumInput() {
  let arr = [];
  let input;
  while (true) {
    input = +prompt("")
    if (isNaN(input)) {
      break
    };
    arr.push(input)
    console.log(arr);
  };
  
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  };
  alert(sum);
};

// solution#2
function sumInput() {
  let arr = [];
  let input = +prompt("enter number");
  console.log(typeof input)
  while (isFinite(input)) {
    arr.push(input);
    input = +prompt("enter number")
    
    console.log(arr);
  };
  
  let sum = 0;
  for (let num of arr) {
    sum = sum + num;
  };
  alert(sum);
};


// Array Exercise #3.11.4 (optional)

function getMaxSubSum(arr) {
  a = []
      
};

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)