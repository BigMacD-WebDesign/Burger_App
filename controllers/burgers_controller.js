var express = require("express");

var router = express.Router();
// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger");


router.get("/", async (req, res) => {
  try {
    const data = await burgers.all();
    console.log("View burgers.")

    res.render("index", { burgers: data });

  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});


router.post("/api/burgers", async (req, res) => {
  try {
    const data = await burgers.create(["burger_name"], [req.body.name]);

    console.log("Test burger display");
    res.json({ id: data.insertId });
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});


router.put("/api/burgers/:id", async (req, res) => {
  try {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    const data = await burgers.update({ devoured: true }, condition);

    if (data.changedRows === 0) {
      res.status(404).end();
    }

    res.status(200).end();
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});

router.delete("/api/burger/:id", async (req, res) => {
  try {
    let condition = `id = ${req.params.id}`;
    console.log(condition);

    const data = await burgers.delete(condition);

    if (data.affectedRows === 0) {
      res.status(404).end();
    }

    res.status(200).end();
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
});


// Export routes for server.js to use.
module.exports = router;
