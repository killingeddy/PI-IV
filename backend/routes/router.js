const verifyToken = require('../tools/verifyToken')
const express = require("express");
const router = express.Router();

const index = require("./index/index");
const auth = require("./auth/index");

router.use("/", index);
router.use("/auth", auth);

module.exports = router;