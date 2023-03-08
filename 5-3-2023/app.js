const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express()
const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const { verify } = require("./middlewares/auth");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
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

app.listen(3000);