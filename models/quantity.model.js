var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const quantitySchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const Quantity = mongoose.model("Quantity", quantitySchema);

module.exports = Quantity;
