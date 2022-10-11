const bcrypt = require("bcryptjs");

async function validateEmail(email) {
  const customer = await this.constructor.findOne({ email });
  if (customer) {
    if (this.id === customer.id) return true;
    return false;
  }
  return true;
}

module.exports = (mongoose) => {
  const Schema = mongoose.Schema;
  const customerSchema = new Schema(
    {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: {
        type: String,
        required: true,
        validate: { validator: validateEmail, message: (props) => "email already in use" },
      },
      password: { type: String, required: true },
      address: { type: String, required: true },
      phonenumber: { type: String, required: true },
      orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    },
    { toJSON: { virtuals: true } },
  );

  customerSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 8);
    next();
  });

  customerSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  };

  const Customer = mongoose.model("Customer", customerSchema);
  return Customer;
};
