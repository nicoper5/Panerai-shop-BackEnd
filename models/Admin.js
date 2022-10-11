const bcrypt = require("bcryptjs");

async function validateEmail(email) {
  const admin = await this.constructor.findOne({ email });
  if (admin) {
    if (this.id === admin.id) return true;
    return false;
  }
  return true;
}

module.exports = (mongoose) => {
  const Schema = mongoose.Schema;
  const adminSchema = new Schema(
    {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: {
        type: String,
        required: true,
        validate: { validator: validateEmail, message: (props) => "email already in use" },
      },
      password: { type: String, required: true },
    },
    { toJSON: { virtuals: true } },
  );

  adminSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
    next();
  });

  adminSchema.methods.comparePassword = function (candidatePassword) {
    const isMatch = bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  };

  const Admin = mongoose.model("Admin", adminSchema);
  return Admin;
};
