import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// Add Movie
router.post("/add", async (req, res) => {
  try {
    console.log("Received data:", req.body);  // DEBUG

    const movie = new Movie(req.body);
    await movie.save();

    res.json({ message: "Movie added successfully", movie });
  } catch (err) {
    console.error("Add movie error:", err);   // DEBUG
    res.status(500).json({ error: err.message });
  }
});

// Get Movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

export default router;




