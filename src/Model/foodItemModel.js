// foodItemModel.js
import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodCategory',
  },
  price: {
    type: Number,
    required: true,
  },
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem
