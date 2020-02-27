
// เบื้องหลังการทำงานของ forEach การสร้างฟังก์ชัน
Array.prototype.fuckboiForEach = function(call) {
  for(let i=0; i < this.length; i++) {
      call(this[i], i, this, "Noom")
  };
};

// dandy จะเป็น "Noom" เสมอ เพราะ parameter กำหนดมา
[1,8,6,0].fuckboiForEach(function(item, index, arr , dandy) { 
  console.log(item+1);
  console.log(index);
  console.log(arr);
  console.log(dandy); 
});

//Exercise 4.10
//1.1
array1 = [1, 2, 30, 400]

let array2 = array1.map(function(num) {
  return num * 2;
}); // array2  = [2, 4, 60, 800]

//1.2 
array1 = [1, 2, 3, 4]
let array2 = array1.map(function(num) {
  return String(num);
});
// array2 ["1", "2", "3", "4"]

//1.3   
array1 = [1, "1", 2, {}] 
let array2 = array1.map(function(item) {
  return typeof(item);
});
//array2 ["number", "string", "number", "object"]

//1.4 
array1 = ["apple", "banana", "orange"]
let array2 = array1.map(function(string) {
  return string.toUpperCase();
});

//array2 ["APPLE", "BANANA", "ORANGE"]

//1.5 
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

let array2 = array1.map(function(item) {
  return item.name;
});
//array2 ["apple", "banana", "watermelon"];

//1.6
array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
let array2 = array1.map(function(item) {
  return item.age;
});
//array2 [14, 18, 32]     

//1.7 
array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
let array2 = array1.map(function(item) {
  return item.name + " " + item.surname;
});
//array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

//1.8 
array1 = [1,3,4,5,6,7,8];
let array2 = array1.map(function(item) {
  if (item % 2 == 0) {
    return "even";
  } else if (item % 2 !==0) {
    return "odd";
  }
});
//array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

//1.9
array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.map(function(item) {
  return Math.sign(item) == -1 ? item * -1 : item;
});
//array2 [1, 3, 2, 8, 4, 5]

//1.10 
array1 = [100, 200.25, 300.84, 400.3]
array2 = array1.map(function(item) {
  return item.toFixed(2);
});
//array2 ["100.00", "200.25", "300.84", "400.30"]


//1.11 
array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];

// easy way
let array2 = array1.map(function(item) {
  let birthYear = Number(item.birth.slice(0,4));
  let age = 2019 - birthYear;
  return age;
});

// precise way
let array2 = array1.map(function(item) {
  let birth = item.birth.slice(0,10);
  // let birthMonth = Number(item.birth.slice(5,7));
  // let birthDate = Number(item.birth.slice(8,10));
  // let age = 2019 - birthYear;
  let nowMillisec = new Date("2020-02-27");
  let birthMillisec = new Date(birth);
  // console.log(birthMillisec)
  let age = (nowMillisec - birthMillisec) / ((1000 * 60 * 60 * 24 * 365.24));
  return Math.round(age);
});

let array2 = array1.map(function(item) {
  let birth = item.birth.slice(0,10);
  let nowMillisec = new Date("2020-02-27");
  let birthMillisec = new Date(birth);
  // to secs * to minutes * to hours * to days * to years
  let age = (nowMillisec - birthMillisec) / ((1000 * 60 * 60 * 24 * 365.24));
  return Math.round(age);
});

/*  array2 [
 *  { name: "apple", birth: "2000-01-01", age: 19 },
 *  { name: "banana", birth: "1990-10-01", age: 29 },
 *  { name: "watermelon", birth: "1985-12-01", age: 33 },
 *  ] ;
*/ 

//1.12
array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

array2 = array1.map(function(item) {
  let date = new Date (item.birth);
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  month = month.filter( (item, index) => index == date.getMonth() );
  birthDay = date.getDate() + " " + month[0] + " " + date.getFullYear();  
  return (
  `<tr>
    <td>${item.name}</td>
    <td>${birthDay}</td>
  </tr> `
  )
});

// array2 = [
//     "<tr>
//       <td>apple</td> 
//       <td>01 jan 2000</td>
//      </tr>",
//     "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
//     "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
// ];

// Exercise set #1
// ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
function unique(arr) {
  return newSet = new Set(arr);
};

let set1 = unique(values);
for (let item of unique(values));
alert( item ); 