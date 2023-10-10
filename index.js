const express = require("express");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gsmArena");

const { createBrand, getBrands } = require("./brands.service.js");
const { createModel, getModelByBrandId } = require("./models.service");
const { getUsers, addUserDetails,getDetailsById } = require("./users.service");
const { addOrder, getOrder } = require("./order.service");
//////////////API OF BRANDS///////////////////////
app.post("/brands", createBrand);
app.get("/brands", getBrands);

//////////////API OF MODELS///////////////////////

app.post("/models", createModel);

///////////////API of get Model by ID//////////

app.get("/brands/:id", getModelByBrandId);

/////////////API OF USERS////////////////
app.post("/users", addUserDetails);

app.get("/users", getUsers);

app.get("/users/:userId/orders/:orderId", getDetailsById);

/////////////API OF ORDERS///////////

app.get("/orders", getOrder);
app.post("/orders", addOrder);

app.listen(9007);
console.log("App listening on ", 9007);
