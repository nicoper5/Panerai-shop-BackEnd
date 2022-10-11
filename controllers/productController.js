const { Product, Collection } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function index(req, res) {
  const query = {};
  if (req.query.bestsellers) query.bestseller = true; //isBestseller
  const products = await Product.find(query);
  res.json(products);
}

async function show(req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  res.json(product);
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const { name, description, price, stock, category, bestseller } = fields;

    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      category,
      bestseller,
      image: files.image.newFilename,
      imageBack: files.imageBack.newFilename,
    });
    try {
      await supabase.storage
        .from("images")
        .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });

      await supabase.storage
        .from("images")
        .upload(files.imageBack.newFilename, fs.createReadStream(files.imageBack.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.imageBack.mimetype,
        });
      await Product.create(newProduct);
      await Collection.findByIdAndUpdate(category, { $push: { products: newProduct.id } });
      return res.json("New product added");
    } catch (err) {
      return res.status(500).json(err.errors);
    }
  });
}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const { name, description, price, stock, category, bestseller } = fields;
    const update = {
      name,
      description,
      price,
      stock,
      category,
      bestseller,
      image: files.image && files.image.newFilename,
      imageBack: files.imageBack && files.imageBack.newFilename,
    };
    try {
      await supabase.storage
        .from("images")
        .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });

      await supabase.storage
        .from("images")
        .upload(files.imageBack.newFilename, fs.createReadStream(files.imageBack.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.imageBack.mimetype,
        });
      const updatedProduct = await Product.findOneAndUpdate({ slug: req.params.slug }, update);
      await Collection.findByIdAndUpdate(updatedProduct.category, {
        $pull: { products: updatedProduct.id },
      });
      await Collection.findByIdAndUpdate(category, { $push: { products: updatedProduct.id } });
      return res.json("Product updated");
    } catch (err) {
      return res.json(err.errors);
    }
  });
}

async function destroy(req, res) {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json("product not found");
  await Collection.findByIdAndUpdate(deleted.category, { $pull: { products: deleted.id } });
  return res.status(200).json("Product removed");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
