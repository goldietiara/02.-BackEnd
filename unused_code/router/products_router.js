const express = require("express");
const { productsController } = require("../controller");
const Router = express.Router();

Router.get("/products", productsController.getProducts);

module.exports = { Router };
