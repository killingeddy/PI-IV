const pool = require("../../config/db");
const express = require("express");
const utils = require("./utils");
const router = express.Router();

router.post("/", async (req, res) => {
  const { temperatura, umidade } = req.query;
  try {
    const newLeitura = await pool.query(
      utils.createLeitura(temperatura, umidade)
    );
    res.json(newLeitura.rows[0]);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
