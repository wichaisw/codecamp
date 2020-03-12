const express = require("express");
const router = express.Router();

// router.get("/*", function(req, res) {
//   res.status(404).send("NOT FOUND");
// });



//
let userList = [
  {
    id: 1,
    name: "Sonter",
    age: 18
  },
  {
    id: 2,
    name: "Nat",
    age: "25"
  },
  {
    id: 3,
    name: "Bob",
    age: "56"
  }
];

router.get("/viewUser", function(req, res) {
  res.send(userList)
});

// add user
router.post("/addUser", function(req, res) {
  function newId() {
    let max = 0;
    for (let user of userList) {
      if (user.id > max) {
        max = user.id;
      }
    }
    return max + 1;
  };

  const newUser = {
    id: newId(),
    name: req.body.name,
    age: req.body.age
  };
  
  userList.push(newUser);
  res.send(newUser); 
});

// delete
router.delete("/deleteUser", function(req, res) {
  userList = userList.filter(function(user) {
    return user.id !== Number(req.query.id)
  })
  res.send(String(userList.length));
});
// router.delete('/deleteUser', function(req, res) {
//   userList = userList.filter(user => user.id !== Number(req.query.id))
//   res.send(String(userList.length))
// })





module.exports = router;