import FoodCategory from "../Model/foodmenuScheema.js";
import FoodItem from "../Model/foodItemModel.js";

export const foodControl = {
    createFoodmenu: async (req, res) => {
      try {
        const {foodMainCate,foodSubCat,foodSubChiled} = req.body;
        const mainCategory = await FoodCategory.create({ name: foodMainCate });
      const subCategory = await FoodCategory.create({ name: foodSubCat, parentCategory: mainCategory._id });
      const subChiledCategory = await FoodCategory.create({ name: foodSubChiled, parentCategory: subCategory._id });
    
      res.status(200).json({msg:"food category created"});
      } catch (error) {
        console.log(error);
        return res.status(500).json({msg:'internal error'})
      }
   },
   getFoodMenu:async(req,res)=>{
   try {
    const {catname,foodname} = req.body
    const spicyCategory = await FoodCategory.findOne({ name: catname });
    if(spicyCategory){
        console.log(foodname);
    const createFoodItem = await FoodItem.create({ name: foodname, category: spicyCategory._id, price: 10 });
      console.log(createFoodItem);
      return res.status(200).json({msg:'item added',data:createFoodItem})
    }else{
        return res.status(404).json({msg:'food category not found'})
    }

   } catch (error) {
    console.log(error);
    return res.status(500).json({msg:'cannot create food '})
   }
   }
}