const { model } = require("mongoose");

const { OrderSchema} = require('../Schemas/OrderSchema');

const OrderModel = new model("Order", OrderSchema);

module.exports = { OrderModel };