import express from "express";
import { testConnection } from "./database/connection.js";
import { categoryProductRoute } from "./routes/categoryProduct.routes.js";
const app = express();
const port = 3002;

app.use(express.json());
app.use(categoryProductRoute);

app.listen(port, ()=> {
    testConnection();
    console.log("running");
});