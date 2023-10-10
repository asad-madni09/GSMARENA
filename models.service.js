const mongoose = require("mongoose");
const Model = require("./models.schema");


const createModel = async function (req, res) {
  const data = req.body;
  const insertModel = await Model.create(data);
  res.status(200).json({
    message: "Item added successfully",
    data: insertModel,
  });
};
const getModelByBrandId = async function (req, res) {
  const brandId = req.params.id;

  const getDetailsById = await Model.findById(brandId).populate('brands')
    .status(200)
    .json({ message: "Here is your details", data: getDetailsById });
};

module.exports = { createModel,getModelByBrandId };
