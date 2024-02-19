import express from "express";
import { userRoute } from "./routes/UserRoute.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})