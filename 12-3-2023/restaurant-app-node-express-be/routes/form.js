const express = require("express");
const path = require("path");

const router = express.Router();
// /form/
router.get("/", (req, res) => {
   res.render("form", {user: req.query.name || "User"});
});

router.post("/submit", (req, res) => {
    res.send(req.body.data);
});

module.exports = router;