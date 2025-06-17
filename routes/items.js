const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Crear un item
router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Leer todos los items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar un item
router.put("/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar un item
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
