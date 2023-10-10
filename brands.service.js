const mongoose = require("mongoose");
const Brands = require("./brands.schema");

const createBrand = async function (req, res) {
  const data = req.body;
  const addBrand = await Brands.create(data);
  res.status(200).json({ message: "Brand Added", data: addBrand });
};
const getBrands = async function (req, res) {
  const getAllBrands = await Brands.find();
  res
    .status(200)
    .json({ message: "All barnds are shown here", data: getAllBrands });
};

module.exports = { createBrand, getBrands };
