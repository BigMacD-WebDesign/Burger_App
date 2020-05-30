var express = require("express");

var router = express.Router();
// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger");


router.get("/", async (req, res) => {
  const data = await burgers.all();
  console.log("View burgers.")

  // res.json(data)

  res.render("index", { burgers: data });
});


router.post("/api/burgers", async (req, res) => {
  const data = await burgers.create(["burger_name"], [req.body.name]);
  console.log("Test burger display");
  res.json({ id: data.insertId });
});


router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  const data = await burgers.update({ devoured: true }, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});

router.delete("/api/burger/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;
    console.log(condition);

  const data = await burgers.delete(condition);

  if (data.affectedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});


// Export routes for server.js to use.
module.exports = router;
