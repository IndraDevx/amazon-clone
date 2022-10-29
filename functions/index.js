const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LxUo3SGeryupRNJ8MSSqec6C5aerDmCyuaS0cHdF7E2B4W4nys8AHbTHjE9Tk5S5vPay3MQyMgwFTWrVTmCijPG00HTSrcJbC"
);

//API

//API Config

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recived boom!! for this amount  >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});
//Listen command
exports.api = functions.https.onRequest(app);

//Example End point
// http://127.0.0.1:5001/clone-b28c9/us-central1/api
