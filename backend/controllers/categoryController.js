import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.json({ error: "Name is required" });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.json({ error: "Already Exist" });
    }

    const category = await new Category({name}).save()

    res.json(category)

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});
