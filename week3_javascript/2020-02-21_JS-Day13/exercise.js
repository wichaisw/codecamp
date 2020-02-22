// Object Exercise: section 4.6.1
let human = {};

human.name = "Wichai";
human.age = 25;
human.home = "BuzzCode";
human.single = true;
human.iq = 8;


// Object Exercise: section 4.7.1

// let newObj = {};
// let inputKey;
// let inputValue;
// while (true) {
//     inputKey = prompt("enter key");
//     if (inputKey === "stop") break;
//     inputValue = prompt("enter value");
//     newObj.inputKey = inputValue;
// };

// console.log (newObj)


// Exercise: ส่งในไลน์
obj1 = {
    age: 16,
    name: "John"
};
console.log(obj1)

// Exercise2
obj2 = {
	level: 3,
	google: "yahoo",
	money: "600k",
	name: "Cat"
};
console.log(obj2)


// Exercise: object ที่มี property, firstName, lastName, age, height โดยใส่ value ด้วย square bracklet
/*
let profileObj = {
    firstName: "",
    lastName: "",
    age: "",
    height: ""
};

let firstnameValue = prompt("enter firstname");
let lastnameValue = prompt("enter lastname");
let ageValue = prompt("enter age");
let heightValue = prompt("enter height");

profileObj["firstName"] = firstnameValue;
profileObj["lastName"] = lastnameValue;
profileObj["age"] = ageValue;
profileObj["height"] = heightValue;

console.log (profileObj)
*/

// Object Exercise: section 4.7.2
/*
fruitObj = {};

while (true) {
    let fruitKey = prompt("enter fruit's name");
    if (fruitKey === "stop") {
        console.log(fruitObj)
        break;
    }
    
    let fruitValue = Number(prompt("enter fruit's amount"));
    if (fruitValue > 0) {
        fruitKey = fruitKey + "s"
    }
    
    fruitObj[fruitKey] = fruitValue;
};
*/

// Object Property Value Shorthand
let name = "son";
let age = 17;

let obj = {
    name,
    age
}

console.log(obj)


