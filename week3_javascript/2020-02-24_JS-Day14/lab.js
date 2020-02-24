// February 24, 2020: Day 14 JavaScript in-class labs
// lab1
const obj = {
  name: "Wichai",
  age: 25,
  height: 170,
  weight: 62
};

let newObj = {};
for (key in obj) {
  newObj[key] = obj[key]
};

console.log(newObj)

newObj["name"] = "Sonter";
console.log(newObj)
console.log(obj)

// lab22

const obj = {
  name: "sonter",
  age: 18,
  height: 196,
  weight: 70
};

const obj2 = {
  name: "Nat",
  weight: 98
};

const obj3 = {
  name: "Tle",
  skill: "nodejs"
};
;
Object.assign(obj3, obj, obj2)

// obj3 = {name: "Nat", skill: "nodejs", age: 18, height: 196, weight: 98}

// Exercise 4.18: ข้อ 1
/* 
 * ให้ทำตามคำสั่งต่อไปนี้
 * สร้าง Object เปล่าขึ้นมา
 * เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
 * เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
 * เปลี่ยน properties name เป็น “Boy”
 * ลบ properties name ออกจาก Object
*/
const obj = {};

obj.name = "Sonter";
obj.surname = "Pakorn";
obj.name = "Boy";

delete obj.name


// Exercise 4.18: ข้อ 2
// สร้างฟังก์ชันเช็กว่า object นั้น empty ไหม ถ้าไม่มี properties ให้ return true, ถ้ามี return false
function isEmpty(obj) {
  let isEmpty = true;
  for (let key in obj) {
    isEmpty = false;
  };
  return isEmpty;
};

// Exercise 4.18: ข้อ 3
/* 
 * const user = {
 *   name: "John"
 * };
 * 
 * // does it work?
 * user.name = "Pete";
*/

// ไม่ error

// Exercise 4.18: ข้อ 4
//จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(obj) {
  let total = 0;
  for (let key in obj) {
    total = total + obj[key];
  };
  return total;
};

sum(salaries); // return 390

// Exercise 4.18: ข้อ 5
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (typeof (obj[key]) == "number") {
      obj[key] = obj[key] * times;
    };
  };
  return obj;
};

multiplyNumeric(menu, 2)  