const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String },
    description: { type: Object, required: true },
    image: { type: String, required: true },
    imageBack: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Collection", required: true },
    bestseller: { type: Boolean, required: true },
  },
  { toJSON: { virtuals: true } },
);
productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
