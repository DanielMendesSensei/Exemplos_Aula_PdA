import { Router } from "express";
import { createCategory, getAllCategories, getCategoryByName } from "../controllers/categoryProduct.controller.js";

const categoryProductRoute = Router();

categoryProductRoute.post("/category", async (req,res)=> {
   const { name } = req.body;
   const newCategory = await createCategory(name);
   res.status(201).json({
    message: "Category created successfully",
    category: newCategory
   });
});

categoryProductRoute.get("/category", async (req, res)=> {
    const categories = await getAllCategories();
    res.json({ categories });
});

categoryProductRoute.get("/category-name", async (req,res)=> {
    const { name } = req.body;
    const category = await getCategoryByName(name);
    res.json({ category })
})

export { categoryProductRoute }