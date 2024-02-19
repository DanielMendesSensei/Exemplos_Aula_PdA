import express from "express";
import { Adm } from "../model/AdmModel.js";
const admRoute = express.Router();

// let adms = [];

admRoute.post("/user", (req,res)=> {
  res.send("teste")
})

export { admRoute } 