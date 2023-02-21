const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express()
const form = require("./routes/form");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")))

app.use((req, res, next) => { //  Auth Middleware
    req.data = "Ishaq";
    next();
});

app.use("/form", form);

app.listen(3000);