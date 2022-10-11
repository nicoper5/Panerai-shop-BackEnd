const { Collection } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function index(req, res) {
  const collections = await Collection.find({});
  res.json(collections);
}

async function show(req, res) {
  const wantedCollection = await Collection.findOne({ slug: req.params.slug }).populate({
    path: "products",
  });
  res.json(wantedCollection);
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const newCollection = new Collection({
      name: fields.name,
      img: files.img.newFilename,
    });
    try {
      await supabase.storage
        .from("images")
        .upload(files.img.newFilename, fs.createReadStream(files.img.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.img.mimetype,
        });
      await Collection.create(newCollection);
      return res.json("collection created");
    } catch (err) {
      return res.json(err.errors);
    }
  });
}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const update = {
      name: fields.name,
      img: files.img && files.img.newFilename,
    };
    try {
      await supabase.storage
        .from("images")
        .upload(files.img.newFilename, fs.createReadStream(files.img.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.img.mimetype,
        });
      await Collection.findOneAndUpdate({ slug: req.params.slug }, update);
      return res.json("collection updated");
    } catch (err) {
      return res.json(err.errors);
    }
  });
}

async function pushProduct(req, res) {
  await Collection.findByIdAndUpdate(req.params.id, {
    $push: { products: req.body.id },
  });
  res.json("item added to collection");
}

async function destroy(req, res) {
  await Collection.findByIdAndDelete(req.params.id);
  res.json("Collection removed");
}

module.exports = {
  index,
  show,
  store,
  update,
  pushProduct,
  destroy,
};
