const router = require("express").Router();
const Quantity = require("../models/quantity.model");

router.route("/").post((req, res) => {
  const quantityNames = req.body.quantity.map(quant => quant.name);
  Quantity.find({ name: { $in: quantityNames } })
    .then(quantity => res.json(quantity))
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
