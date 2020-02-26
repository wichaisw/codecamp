// February 25, 2020: Day 15 JavaScript in-class labs
//exercise 6.6.1
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
//user is undefined

//exercise 6.6.2
function makeUser() {
  return {
    name: "John",
    ref: function () {
        return this}
  };
};

let user = makeUser();

alert( user.ref().name );
// alert เปล่าๆ

function makeUser() {
  return {
    name: "John",
    ref: function () {
      return this
    }
  };
};

let user = makeUser();

alert(user.ref().name);
// alert John

//Exercise 6.6.3
let calculator = {
  read: function () {
    calculator.num1 = Number(prompt("first number"));
    calculator.num2 = Number(prompt("second number"));
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  
  mul: function () {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Exercise 6.6.4 
let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log(this.step);
    return this;
  },
  down() {
    this.step--;
    console.log(this.step);
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

ladder.up().up().down().showStep();

// Exercise 7.4.1
// ถ้าใช้ num1, num2 เลย ไม่ใช่ this.num1, this.num2 ผลลัพธ์ก็เหมือนกัน แต่เป็นสิ่งที่ผิดและไม่ควรทำ
// เพราะการประกาศตัวแปรโดยไม่มี let, const หรือใช้การเก็บค่าใน object key แบบ object.num หรือ this.num
// จะทำให้ตัวแปรนั้นมีค่าใน global ผลลัพธ์จึงเรียกใช้ได้เพราะนอกฟังก์ชันก็รู้จักตัวแปร num1 
function Calculator() {
  this.num1 = 0;
  this.num2 = 0;
  this.read = function() {
      this.num1 = Number(prompt("first number"));
      this.num2 = Number(prompt("second number"));
  };
  this.sum = function() {
    return this.num1 + this.num2
  };
  this.mul = function() {
    return this.num1 * this.num2
  };
};

let cal1 = new Calculator();
cal1.read();
console.log(cal1.sum());
console.log(cal1.mul());

// Exercise 7.4.2
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    newNum = Number(prompt("enter number"));
    this.value = this.value + newNum;
  };
};

let accu1 = new Accumulator(10);


