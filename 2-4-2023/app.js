const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors')
const app = express()
const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const products = require("./routes/products");
const { verify } = require("./middlewares/auth");
const mongoose = require("./models/connection");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => { //  Auth Middleware
    req.data = "Ishaq";
    next();
});

app.use("/auth", auth);
app.use("/todo", verify, todo);
app.use("/form", form);
app.use("/products", products);

app.listen(8000);