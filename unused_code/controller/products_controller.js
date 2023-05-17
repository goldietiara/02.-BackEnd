const fs = require("fs");

module.exports = {
  getProducts: (req, res) => {
    let products = fs.readFileSync("./data/products.json");
    res.status(200).send(JSON.parse(products));
  },
};
