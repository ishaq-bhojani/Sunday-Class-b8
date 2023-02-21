const express = require("express");
const path = require("path");

const router = express.Router();
// /form/
router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "form.html"));
});

router.post("/submit", (req, res) => {
    res.send(req.body.data);
});

module.exports = router;