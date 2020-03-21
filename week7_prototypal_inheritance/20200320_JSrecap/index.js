// Getter and Setter

// Prototypal inheritance // __proto__
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// console.log(pockets.__proto__.__proto__.__proto__)
// console.log(pockets.glasses)

// for...in loop จะวนเอาทั้งหมดที่สืบทอดจาก __proto__
// แต่ hasOwnProperty เช็กแค่ property ตัวเอง 
for(let prop in pockets) {
  let isOwn =  pockets.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Our: ${prop}`); // เป็นของตัวเอง
  } else {
    console.log(`Inherited: ${prop}`); // ถูกถ่ายทอดมา
  }
}

console.log(pockets.hasOwnProperty("glasses")) // fasle เพราะ hasOwnProperty จะเช็กเฉพาะ property ตัวเองไม่สนจาก proto


// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// solution #1 : เพราะ this ไม่มี stomach เลยวิ่งไป push ใส่ proto
let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// solution #2 : เป็นการสร้าง property เมื่อไม่จเอ จึง define stomach ให้ตัวปัจจุบันเลย
// ถ้า push จะมองหาตัวที่มีอยู่
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};


// F.prototype // .prototype

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); 
//  rabbit.__proto__ == animal

alert( rabbit.eats ); // true


// Native prototypes
// 1. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms

Function.prototype.defer = function(milliseconds) {
  setTimeout(this, milliseconds)
}

// function f() {
//   alert("Hello!");
// }

// f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที

// 2.   ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
Function.prototype.defer = function(ms) {
  return function(a,b) {
    setTimeout(() => alert(a+b), ms)
    }
}

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที


// Modern Prototype
// Object.create(proto[, descriptors]) – สร้าง object เปล่าและกำหนด proto ที่ใส่มา เป็น [[Prototype]] และมี Optional property ใส่ได้ด้วย
// Object.getPrototypeOf(obj) – คืนค่าเป็น [[Prototype]] ของ obj.
// Object.setPrototypeOf(obj, proto) – กำหนด [[Prototype]] ของ obj เป็น proto.

let animal = {
  eats: true
};

// jumps เป็นของ rabbit เท่านั้น
let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true

// Object.create() ยังสามารถใช้ clone Object ได้ดีกว่าการใช้ for … in ด้วย
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

let dictionary = Object.create(null,{
  toString:{
      value: function(){
          return Object.keys(this).join(",");
      }
  }
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"


function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                                     // Rabbit
Rabbit.prototype.sayHi();                           // undefined
Object.getPrototypeOf(rabbit).sayHi();              // undefined
rabbit.__proto__.sayHi();                           // undefined