const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fs = require("fs");
const PORT = 2601;

const app = express();

app.use(cors());
app.use(bodyParser());

const { productsRouter } = require("./unused_code/router");
app.use("/data", productsRouter);

app.listen(PORT, () => console.log(`Server Running ${PORT} YEAAYYY!!! XD`));
