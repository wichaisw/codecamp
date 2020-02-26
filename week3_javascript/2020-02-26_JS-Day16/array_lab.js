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