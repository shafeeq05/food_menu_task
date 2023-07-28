import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodCategory',
  }
});

const foodCategory = mongoose.model('FoodCategory', categorySchema);

export default foodCategory