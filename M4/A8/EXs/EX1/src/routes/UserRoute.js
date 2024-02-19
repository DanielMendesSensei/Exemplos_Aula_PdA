import express from "express";
import { getAllUsers, getUserByName, insertUser } from "../controllers/UserController.js";
const userRoute = express.Router();

userRoute.post("/user", (req,res)=> {
    const { name, email, password } = req.body;
    const newUser = insertUser(name, email, password);
    res.json({newUser});
});

userRoute.get("/user", (req,res)=> {
    const listUsers = getAllUsers();
    res.json(listUsers);
});

userRoute.get("/user-find", (req,res)=> {
  const { name } = req.body;
  const user = getUserByName(name);
  res.json({user}); 
});

export { userRoute } 