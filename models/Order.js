const mongoose = require("mongoose");
const Product = require("./Product");

async function checkStock(products) {
  for (const product of products) {
    const wantedProduct = await Product.findById(product.id);
    const stock = wantedProduct.stock;
    if (product.qty > stock) return false;
  }
  return true;
}

const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    products: {
      type: Array,
      validate: { validator: checkStock, message: (props) => "not enough stock" },
    },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: { values: ["unpaid", "paid", "sent", "delivered"], message: "not a valid status" },
      required: true,
    },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    phonenumber: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);

orderSchema.pre("save", async function (next) {
  for (const product of this.products) {
    await Product.findByIdAndUpdate(product.id, { $inc: { stock: -product.qty } });
  }
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
