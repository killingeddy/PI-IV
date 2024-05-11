const verifyToken = require("../tools/verifyToken");
const express = require("express");
const router = express.Router();

const index = require("./readings/index");
const auth = require("./auth/index");

router.use("/readings", verifyToken, index);
router.use("/auth", auth);

module.exports = router;
