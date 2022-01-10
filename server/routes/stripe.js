const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.token,
      amount: req.body.amount,
      currency: "INR",
    },
    (stripeErr, stripeResponse) => {
      if (stripeErr) {
        res.status(500).json(stripeErr.message);
      } else {
        res.status(200).json(stripeResponse);
      }
    }
  );
});
module.exports = router;
