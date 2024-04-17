const pool = require("../../config/db");
const express = require("express");
const utils = require("./utils");
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Hello, world!");
});

module.exports = router;