const slugify = require("slugify");

module.exports = (mongoose) => {
  const Schema = mongoose.Schema;
  const collectionSchema = new Schema(
    {
      name: { type: String, required: true },
      slug: { type: String },
      img: { type: String, required: true },
      products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    },
    { toJSON: { virtuals: true } },
  );
  collectionSchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });

  const Collection = mongoose.model("Collection", collectionSchema);
  return Collection;
};
