const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const helmet = require('helmet')

const itemsRouter = require("./routes/items");
const codesRouter = require("./routes/code");
const quantitiesRouter = require("./routes/quantity");
const chargeRouter = require("./routes/charge");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.use(cors());
app.use(helmet())
app.use(express.json());

app.use("/items", itemsRouter);
app.use("/code", codesRouter);
app.use("/quantity", quantitiesRouter);
app.use("/charge", chargeRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
