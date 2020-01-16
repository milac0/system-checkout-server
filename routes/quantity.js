const router = require("express").Router();
const Quantity = require("../models/quantity.model");

router.route("/").post((req, res) => {
  const name = req.body.name;
  Quantity.findOne({ name })
    .then(code => res.json(code))
    .catch(error => res.status(400).json({ error }));
});

router.route("/add").post((req, res) => {
  const newQuantity = new Quantity(req.body);

  newQuantity
    .save()
    .then(() => res.json(`added quantity`))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
