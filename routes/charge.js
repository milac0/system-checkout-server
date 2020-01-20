const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.route("/").post(async (req, res) => {
  const { id, email, basket, price } = req.body;
  //add price check based on basket & quantity & code
  // no receipt in test mode
  try {
    let { status } = await stripe.charges.create({
      amount: price * 100,
      currency: "eur",
      description: JSON.stringify(basket),
      "receipt_email": email,
      source: id
    });
    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
