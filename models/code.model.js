var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const codeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  savings: { type: String, required: true },
  conjuction: { type: Boolean, required: true }
});

const Code = mongoose.model("Code", codeSchema);

module.exports = Code;
