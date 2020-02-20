// February 17-18, 2020: Basic JavaScript in-class laps

// February 17, 2020
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


// February 18, 2020

//Section 1: Boolean
//Boolean Operators Exercise 1
alert(null || 2 || undefined);              // 2
alert(alert(1) || 2 || alert (3));          // แสดง alert 1 แล้วคืน 2
alert(1 && null && 2);                      // null
alert(alert(1) && alert (2));               // แสดง alert 1 แล้วคืน undefined
alert(null || 2 && 3 || 4);                 // 3

//Boolean Operators Exercise 2
let age = prompt("Please enter your age.");
if (age >= 18 && age <= 60) {
    alert(`your age is ${age}`)
};

//Boolean Operators Exercise 3
let age = prompt("Please enter your age.");
if (!(age >= 18 && age <= 60)) {
    alert(`your age is ${age}`);
} else {
    console.log("not run");
}

// Boolean Operators Exercise 4
if (-1 || 0) alert( 'first' );          // run
if (-1 && 0) alert( 'second' );         // not run
if (null || -1 && 1) alert( 'third' );  // run

// Boolean Operators Exercise 5: log in system
let username = prompt("Who are you?");
if (username === "Admin") {
    let password = prompt("Please enter password") 
        if (password === "codecamp#5") {
            alert("ยินดีต้อนรับ");
        } else if (password === null || password === "") {
            alert("ยกเลิก");
        } else {
            alert("Wrong password");
        }  
// !user มีค่าเท่า username === null เพราะถ้ามีค่า username เป็นทรู ไม่มีก็เป็น false
} else if (username === null || username === "") {
    alert("ยกเลิก");
} else {
    alert("ผมไม่รู้จักคุณ");
}

// Section2: Loop
// Loop Exercise: ข้อ 2.5.1 เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
/*
let i = 3;
while (i) {
  alert( i-- );
} 
*/
// ตอบ เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลข 1


// Loop Exercise: ข้อ 2.5.2 code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
/*
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );
*/
// ตอบ ไม่เหมือน เพราะ ++i เพิ่มค่า i ขึ้นมาก่อนที่จะเช็กเงื่อนไข < 5 รอบแรกที่เช็ก i จึงเป็น 1 แต่ i++ เพิ่มค่าทีหลัง รอบแรกที่เช็ก i จึงเริ่มที่ 0 ทำให้แสดงผลเลข 1 ถึง 5

// Loop Exercise: ข้อ 2.5.3 code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
/*
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
*/
// ตอบ เหมือน เพราะเมื่อ นำไปเช็คค่า i < 5 ทั้ง i++ และ ++i ก็เพิ่มค่าตัวเองขึ้นมา 1แล้ว 

// Loop Exercise: ข้อ 2.5.4  ให้เขียน loop ที่แสดงเลข 2 ถึง 10 ออกมา
for (let i=1; i<=10; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
}


// Loop Exercise: ข้อ 2.5.5 เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
/*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }
*/  

let i =0;
while (i<3) {
  alert( `number ${i}!` );
  i++
}


// Loop Exercise 1: for loop
let sum = 0;
for (let i = 1; i <= 1027; i = i + 2) {
    sum += i;    
}
console.log(sum);

// Loop Exercise 2: convert for loop to while loop
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

// alternative way
let i = 0;
while (i<3) {
    alert(`number ${i}!`)
    i++;
}  


// Loop Exercise 3: ข้อ 2.5.6 เกมทายตัวเลข

let rightNumber = Number(prompt("Choose a number between 1 and 100"));
while (rightNumber < 1 || rightNumber > 100 || isNaN(rightNumber) ) {
    alert("Please enter number between 1 and 100");
    rightNumber = Number(prompt("Choose a number between 1 and 100"));
}
// หรือตั้งเงื่อนไขว่าถ้า เลขไม่อยู่ใน 100 ก็ไม่เข้า while แต่แรก


let guessNumber;
while (guessNumber != rightNumber ) {
    guessNumber = Number(prompt("Guess the number."));
    if (guessNumber === null || guessNumber === "") {
        alert("exit");
        break;
    } else if (guessNumber > rightNumber) {
        alert("Your guessing number is too high");
    } else if (guessNumber < rightNumber) {
        alert("Your guessing number is too low");
    } else if (guessNumber == rightNumber) {
        alert("Congrats! You guess it right!");
    }
}
// ใช้ tenary แทนได้โดย
//     let message = (guessNumber > rightNumber) ? "Your guessing number is too high":"Your guessing number is too low";
//     alert(message)

// Section3: Switch Cases
// Switch Case Exercise 1: convert switch cases to if-else conditions
let browser = prompt("enter the browser you're using")
if (browser === "Edge") {
    alert( "You've got the Edge!" );
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

  

// Switch Case Exercise 2: convert if-else conditions to switch cases
let a = +prompt('a?', '');          // let a = Number(prompt('a?', ''));  
switch(a) {
    case(0): 
        alert(0);
        break;
    case(1):
        alert(1);
        break;
    case(2 || 3):
        alert("2,3");
        break;
}

