// routes/toy.js
import express from "express";
import Toy from "../models/toy.js";

const router = express.Router();

// Add a new toy
router.post("/add", async (req, res) => {
  try {
    const { name, price, description, category } = req.body; // Include category in the request body
    const toy = new Toy({ name, price, description, category }); // Include category when creating a new Toy instance
    await toy.save();
    res.status(201).json(toy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all toys
router.get("/", async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a toy
router.patch("/update/:id", getToy, async (req, res) => {
  if (req.body.name != null) {
    res.toy.name = req.body.name;
  }
  if (req.body.price != null) {
    res.toy.price = req.body.price;
  }
  if (req.body.description != null) {
    res.toy.description = req.body.description;
  }
  if (req.body.category != null) { // Update category if included in request body
    res.toy.category = req.body.category;
  }
  try {
    const updatedToy = await res.toy.save();
    res.json(updatedToy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a toy
router.delete('/delete/:id', async (req, res) => {
  try {
    const toy = await Toy.findByIdAndDelete(req.params.id);
    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }
    res.json({ message: 'Toy deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Middleware to get toy by ID
async function getToy(req, res, next) {
  let toy;
  try {
    toy = await Toy.findById(req.params.id);
    if (toy == null) {
      return res.status(404).json({ message: 'Cannot find toy' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.toy = toy;
  next();
}

export default router;