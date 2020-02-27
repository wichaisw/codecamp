
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
