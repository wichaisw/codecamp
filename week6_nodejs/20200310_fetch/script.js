const fs = require("fs");

//create fecth function for node
function fetch(path) {
  return new Promise(function(resolve) {
    let response = fs.readFileSync(path, "utf-8");
    resolve(response)
  }) 
}

fetch("homework1.json").then(function(myJson) {
  console.log(myJson)
})


// fetch("./homework1.json").then(function(response) {
//   return response.json();
// })
//   .then(function(myJson) {
//     console.log(myJson);
//   })
//   .catch(error => {
//     console.error("error", error);
//   })

