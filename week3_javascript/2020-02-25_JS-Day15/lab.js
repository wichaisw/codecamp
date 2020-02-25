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