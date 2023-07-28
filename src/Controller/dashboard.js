import FoodCategory from "../Model/foodmenuScheema.js";
import FoodItem from "../Model/foodItemModel.js";

export const dashboard = {
    food:async(req,res)=>{
        const allCategories = await FoodCategory.find();
        const allFoodItems = await FoodItem.find().populate();
        
        return res.status(200).json({category:allCategories,fooditem:allFoodItems})
    }
}