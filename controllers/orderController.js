const { Order } = require("../models"); //status codes, res.json({message: ....})

async function index(req, res) {
  const orders = await Order.find({}).sort({ createdAt: "desc" });
  res.json(orders);
}

async function showByCustomer(req, res) {
  const orders = await Order.find({ customer: req.auth.id })
    .sort({ createdAt: "desc" })
    .populate({ path: "products" });
  res.json(orders);
}

async function show(req, res) {
  const wantedOrder = await Order.findById(req.params.id);
  if (!wantedOrder) return res.status(404);
  res.json(wantedOrder);
}

async function showLatest(req, res) {
  const latestOrder = await Order.findOne({ user: req.auth.id }).sort({ createdAt: "desc" });
  res.json(latestOrder);
}

async function store(req, res) {
  const newOrder = new Order({
    customer: req.auth.id,
    products: req.body.products,
    total: req.body.total,
    status: "paid",
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    deliveryAddress: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phonenumber: req.body.phonenumber,
  });
  try {
    await Order.create(newOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
  res.json({ message: "order created" });
}

async function update(req, res) {
  await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.json({ message: "status modified" });
}

module.exports = {
  index,
  showByCustomer,
  show,
  store,
  update,
  showLatest,
};
