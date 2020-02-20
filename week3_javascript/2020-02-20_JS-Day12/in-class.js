// Arrow Function Exercise 1
/* let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => {alert("You agreed.");},
    () => {alert("You canceled the execution");}
); */

// Clean Code Exercise 1

/* แก้ไขการเขียนโค้ดต่อไปนี้

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}
let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
} */

/*
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) result *= x;
  return result;
}

let x = prompt("x?", ''), n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
} */

// JavaScript Exercise 1: BMI#1 

/*
let user1 = prompt("Enter 1st person name.");
let bmi1 = Number(prompt("Enter 1st person bmi"));
let user2 = prompt("Enter 2nd person name.");
let bmi2 = Number(prompt("Enter 2nd person bmi"));
*/

/* let bmiCompare = (a, b) => {
    if (a > b) {
        alert(`${user1} has more BMI than ${user2}
        ${user1} BMI is ${bmi1}`);
    } else if(a > b) {
        alert(`${user2} has more BMI than ${user1}
        ${user2} BMI is ${bmi2}`);
    } else {
        alert(`${user1} and ${user2} has equal BMI`);
    }
}

bmiCompare(bmi1, bmi2); */

/*
let bmiCompare = (a, b) => {
    if (a > b) {
        alert(`${user1} has more BMI than ${user2}
        ${user1} BMI is ` + a);
    } else if(a > b) {
        alert(`${user2} has more BMI than ${user1}
        ${user2} BMI is ` + b);
    } else {
        alert(`${user1} and ${user2} has equal BMI`);
    }
}

bmiCompare(bmi1, bmi2);
*/

// JavaScript Exercise 2: BMI#2
/*
let user1 = prompt("Enter 1st person name.");
let cmHeight1 = Number(prompt("Enter 1st person height (cm.)"));
let weight1 = Number(prompt("Enter 1st person weight (kg.)"));

let user2 = prompt("Enter 2nd person name.");
let cmHeight2 = Number(prompt("Enter 2nd person height (cm.)"));
let weight2 = Number(prompt("Enter 2nd person weight (kg.)"));
*/

// คำนวณค่า BMI จาก ส่วนสูง(เซนติเมตร) และน้ำหนัก (กิโลกรัม)
/*
let bmiCalculator = (cmHeight, weight) => {
    let mHeight = cmHeight / 100;
    let bmi = weight / mHeight**2;
    return bmi;
}
*/

/*
function bmiCalculator (cmHeight, weight) {
    let mHeight = cmHeight / 100;
    let bmi = weight / mHeight**2;
    return bmi;
}
*/

/*
let bmi1 = bmiCalculator(cmHeight1, weight1)
let bmi2 = bmiCalculator(cmHeight2, weight2)

if (bmi1 > bmi2) {
    alert(`${user1} has more BMI than ${user2} \n${user1} BMI is ${bmi1}`);
} else if(bmi2 > bmi1) {
    alert(`${user2} has more BMI than ${user1} \n${user2} BMI is ${bmi2}`);
} else {
    alert(`${user1} and ${user2} has equal BMI`);
}
*/

// JavaScript Exercise 3: Highest Number
let highestNum = -Infinity;
while (true) {
    let num = prompt("Please enter number.");
   
    if ( isNaN(num) ) {
        alert("Please enter only number")
        continue;
    } else if (num > highestNum && num !== null) {
        highestNum = Number(num);
    } else if (highestNum === -Infinity) {
        continue;
    }
    
    if (num === null) {
        alert(`The ้highest number is ${highestNum}`);
        break;
    }; 
};


