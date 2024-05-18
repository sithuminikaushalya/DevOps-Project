import mongoose from "mongoose";

const choseCategory = ['ANIM & MANGA','COMICS & SUPERHEROS','MOVIES & TV']

const toySchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  category : {
    type: String,
    enum: choseCategory
  }
});

const Toy = mongoose.model('Toy', toySchema);

export default Toy;
