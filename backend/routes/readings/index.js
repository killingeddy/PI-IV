const pool = require("../../config/db");
const express = require("express");
const utils = require("./utils");
const router = express.Router();

router.post("/", async (req, res) => {
  const { temperatura, umidade, fogo, gas } = req.body;
  try {
    const newLeitura = await pool.query(
      utils.createLeitura(temperatura, umidade, fogo, gas)
    );
    res.json(newLeitura.rows[0]);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allLeituras = await pool.query(utils.getAllLeituras());
    res.json(allLeituras.rows);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { temperatura, umidade } = req.query;
  try {
    const updatedLeitura = await pool.query(
      utils.updateLeitura(id, temperatura, umidade)
    );
    res.json(updatedLeitura.rows[0]);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(utils.deleteLeitura(id));
    res.json({ message: "Leitura deleted" });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const leitura = await pool.query(utils.getLeituraById(id));
    res.json(leitura.rows[0]);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
