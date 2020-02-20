// February 17, 2020: Day 9 Basic JavaScript in-class labs

//Lab1
console.log("Lab1")
let human;
const name = "Wichai";
human = name;
console.log(human);

//Lab2
console.log("Lab2")
let myWalletValue = 200;
let myParentsName = "father & mother";
let myAddress = "134 Suanson Village";
let ourUniverseAge = 13800000000;

// Exercise1
console.log("Exercise1")
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name}`);

// Exercise2
console.log("Exercise2")
let myName = "Wichai"
let myAge = "25"
let Address = "134 Suanson Village";
let myProfile = `My name is ${myName}. I'm ${myAge} years old.\nI live at ${Address}`
console.log(myProfile)

// Basic Operators - Exercise 1
console.log("Basic Operators - Exercise 1")
let a = 1, b = 1;
console.log(a, b) // 1,1
let c = ++a; 
console.log(c) //1
let d = b++;
console.log(d) //2

// Basic Operators - Exercise 2
console.log("Basic Operators - Exercise 2")
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log("\t \n" - 2);

//Basic Operators - Exercise 3
console.log("Basic Operators - Exercise 3");
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log("bee" < "be"); // false
console.log("bee" > "Bee"); // true
console.log("Bee" < "be"); // true

//if-else - Exercise 1
if ("0") {
    alert("Hello Codecmap #5")
} 
//"0" == true

//if-else - Exercise 2
let theName = prompt("What's my name?");
if (theName === "Wichai") {
    alert ("เก่งมาก");
} else {
    alert ("คุณไม่รู้จักชื่อฉัน");
}

//if-else - Exercise 3 
    let score = prompt("Please enter your score.");
    if (score >= 80) {
        alert ("you got an A grade.");
    } else if (score >= 70) {
        alert("you got a B grade ");
    } else if (score >= 60) {
        alert("you got a C grade");
    } else if (score >= 50) {
        alert("you got a D grade");
    } else if (score < 50) {
        alert("you failed.");
    } else {
        alert("wrong input. please enter only number.");
    }

// if-else - Exercise 4: tenary operators
let age = prompt("How old are you?");
let price = (age < 18) ? 2000 : 3500;
alert(price);

