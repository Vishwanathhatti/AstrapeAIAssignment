import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";

// @desc Place new order
export const placeOrder = async (req, res) => {
  try {
    const { addressId } = req.body;
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.item");
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

    const orderItems = cart.items.map(i => ({
      item: i.item._id,
      quantity: i.quantity,
      price: i.item.price
    }));

    const totalAmount = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      shippingAddress: addressId,
      totalAmount
    });

    // Clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get user orders
export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("items.item shippingAddress");
  res.json(orders);
};

// @desc Get single order
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("items.item shippingAddress");
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

// @desc Update order status (Admin only)
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = status;
  await order.save();
  res.json(order);
};
