const router = require("express").Router();
const Item = require("../models/item.model");

router.route("/").get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(error => res.status(400).json({ error }));
});

router.route("/add").post((req, res) => {
  const newItem = new Item(req.body);

  newItem
    .save()
    .then(() => res.json(`added item`))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
