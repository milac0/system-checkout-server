var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
