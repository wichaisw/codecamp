// Arrow Function Exercise 1
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => {alert("You agreed.");},
    () => {alert("You canceled the execution");}
); 

// Clean Code Exercise 1
// แก้ไขการเขียนโค้ดต่อไปนี้
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

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
} 

// JavaScript Exercise 1: BMI#1 
let user1 = prompt("Enter 1st person name.");
let bmi1 = Number(prompt("Enter 1st person bmi"));
let user2 = prompt("Enter 2nd person name.");
let bmi2 = Number(prompt("Enter 2nd person bmi"));


let bmiCompare = (a, b) => {
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

bmiCompare(bmi1, bmi2); 


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


// JavaScript Exercise 2: BMI#2
let user1 = prompt("Enter 1st person name.");
let cmHeight1 = Number(prompt("Enter 1st person height (cm.)"));
let weight1 = Number(prompt("Enter 1st person weight (kg.)"));

let user2 = prompt("Enter 2nd person name.");
let cmHeight2 = Number(prompt("Enter 2nd person height (cm.)"));
let weight2 = Number(prompt("Enter 2nd person weight (kg.)"));


// คำนวณค่า BMI จาก ส่วนสูง(เซนติเมตร) และน้ำหนัก (กิโลกรัม)
let bmiCalculator = (cmHeight, weight) => {
    let mHeight = cmHeight / 100;
    let bmi = weight / mHeight**2;
    return bmi;
}

function bmiCalculator (cmHeight, weight) {
    let mHeight = cmHeight / 100;
    let bmi = weight / mHeight**2;
    return bmi;
}

let bmi1 = bmiCalculator(cmHeight1, weight1)
let bmi2 = bmiCalculator(cmHeight2, weight2)

if (bmi1 > bmi2) {
    alert(`${user1} has more BMI than ${user2} \n${user1} BMI is ${bmi1}`);
} else if(bmi2 > bmi1) {
    alert(`${user2} has more BMI than ${user1} \n${user2} BMI is ${bmi2}`);
} else {
    alert(`${user1} and ${user2} has equal BMI`);
}


// JavaScript Exercise 3: Highest Number
let highestNum = -Infinity;
while (true) {
    let num = prompt("Please enter number.");
    
    if ( isNaN(num) ) {
        alert("Please enter only number.")
        continue;
    } else if (num === null && highestNum !== -Infinity) {
        alert(`The highest number is ${highestNum}`);
        break;
    } else if (Number(num) > Number(highestNum) && num !== null) {
        highestNum = num;
    } else if (highestNum === -Infinity) {
        alert("Please enter some number.")
        continue; 
    };
};

// JavaScript Exercise 4: 2 Highest Number
/* ทำเหมือนเดิม กำหนดให้หาก num ที่กรอกมากกว่า highestNum1 ก็เก็บค่านั้นไว้ใน highestNum1
 * แล้ว copy ค่าเลขสูงสุดนี้ไว้ใน tempNum ด้วย
 * เมื่อมีเลขตัวใหม่ที่มีค่ามากกว่าเดิมมาแทนที่ ก็เก็บเลขนั้นไว้ใน highestNum1 เลย
 * แล้วเอาตัวสำเนาของอดีต highestNum1 หรือเลขเคยสูงสุดที่ไปใส่ให้ highestNum 2 ก็จะได้เลขค่าสูงสุดอันดับ 2
 * ใส่ if เช็กว่าค่า highestNum2 ไม่ใช่ -Infinity หรือค่าต่ำสุดที่ตั้งเป็น default ไว้้
 * หากเป็น -Infinity จะบังคับใส่เลขเพิ่มอีกตัว
 * ทว่าค่า default ของ highestNum2 ตั้งไว้เป็น -Infinity อยู่แล้ว จึงเข้าเงื่อนไขตั้งแต่รอบแรก
 * หมายความว่าเกมนี้จะแจ้งเตือนบังคับให้ใส่เลขอย่างน้อย 2 ตัวขึ้นไป
 * 
 * สร้างกรณีดักในกรณีที่ ใส่เลขตัวแรกแล้ว แต่เลขตัวที่สองมีค่าน้อยกว่า highestNum1
 * โดยให้ assign ค่าใส่ highestNum2 ถ้าค่าต่ำกว่าไม่ต้องทำอะไร เพราะเราไม่แสดงผลค่าที่ต่ำกว่านี้
 * หากไม่ดักไว้จะทำให้ติด loop ไม่จบถ้าเลขตัวที่สองน้อยกว่าเลขตัวแรก
*/

let highestNum1 = -Infinity;
let highestNum2 = -Infinity;;
while (true) {
    let num = prompt("Please enter number.");
    
    if ( isNaN(num) ) {
        alert("Please enter only number.")
        continue;
    } else if (!num && highestNum1 !== -Infinity && highestNum2 !== -Infinity) {
        alert(`The highest number is ${highestNum1}.\nThe second highest number is ${highestNum2}.`);
        break;
    } else if (Number(num) > Number(highestNum1) && num !== null && num !== "") {
        let tempNum = highestNum1;
        highestNum1 = num;
        highestNum2 = tempNum;

        if (highestNum2 === -Infinity || highestNum2 === "") {
            alert("Please enter at least one more number.")
            continue; 
        };

    } else if (Number(num) <= Number(highestNum1) && Number(num) > Number(highestNum2) && num !== null && num !== "") {
        highestNum2 = num;
    } else if (highestNum1 === -Infinity || num === "") {
        alert("Please enter some number.")
        continue; 
    };
};


