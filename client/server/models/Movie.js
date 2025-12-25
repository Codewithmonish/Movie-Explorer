import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  poster: { type: String, required: true },

  banner: { type: String, default: "" },
  cast: { type: [String], default: [] },
  director: { type: String, default: "" },
  genre: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  duration: { type: Number, default: 0 }
});

export default mongoose.model("Movie", movieSchema);






