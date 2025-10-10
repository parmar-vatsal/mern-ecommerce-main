const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");
const {verifyTokenAndAdmin} = require("./verifyToken");

//GET DASHBOARD STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const totalUsers = await User.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();

    const totalRevenueResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$totalPrice" }
        }
      }
    ]);
    const totalRevenue = totalRevenueResult.length > 0 ? totalRevenueResult[0].total / 100 : 0; // assuming totalPrice is in cents

    // Monthly user registrations
    const userStats = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    // Monthly orders
    const orderStats = await Order.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    // Monthly revenue
    const revenueStats = await Order.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          totalPrice: 1
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$totalPrice" },
        },
      },
    ]);

    res.status(200).json({
      success: 1,
      message: "",
      data: {
        totalUsers,
        totalProducts,
        totalOrders,
        totalRevenue,
        userStats,
        orderStats,
        revenueStats
      }
    });
  } catch (err) {
    res.status(500).json({status: 0, message: err.message})
  }
});

module.exports = router;
