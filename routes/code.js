const router = require("express").Router();
const Code = require("../models/code.model");

router.route("/").post((req, res) => {
  const name = req.body.name;
  Code.findOne({ name })
    .then(code => res.json(code))
    .catch(error => res.status(400).json({ error }));
});

router.route("/add").post((req, res) => {
  const newCode = new Code(req.body);

  newCode
    .save()
    .then(() => res.json(`added code`))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
