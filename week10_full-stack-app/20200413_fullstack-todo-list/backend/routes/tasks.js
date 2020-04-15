const express = require("express");
const db = require("../models");
const router = express.Router();


// Create
router.post("/", (req, res) => {
  const task = req.body.task;
  db.task
    .create({
      isCompleted: false,
      task,
    })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Read
router.get("/", (req, res) => {
  db.task
    .findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:id", (req, res) => {
  const targetId = Number(req.params.id);
  db.task
    .findOne({ where: { id: targetId } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// Update
router.put("/:id", (req, res) => {
  const updatedTask = req.body.task;
  const updatedIsCompleted = Boolean(Number(req.body.isCompleted));
  const targetId = Number(req.params.id);

  db.task
    .update(
      {
        task: updatedTask,
        isCompleted: updatedIsCompleted,
      },
      { where: { id: targetId } }
    )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  const targetId = Number(req.params.id);
  db.task
    .destroy({ where: { id: targetId } })
    .then((result) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
