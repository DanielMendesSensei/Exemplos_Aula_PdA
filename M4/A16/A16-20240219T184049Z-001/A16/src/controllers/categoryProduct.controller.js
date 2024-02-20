import { sequelize as database} from "../database/connection.js";
import { Category } from "../entities/CategoryProduct.entity.js"

let categories = [];

export const createCategory = async (name) => {
   // antes 
   // const newCategory1 = { id: "dmsamds2e12e", name };
   // categories.push(newCategory1);
   await database.sync();
   const newCategory = await Category.create({
      name
   });
   return newCategory;
}

export const getAllCategories = async () => {
   return await Category.findAll();
}

export const getCategoryByName = async (name) => {
   return await Category.findOne({
      where: {
         name
      }
   });
}