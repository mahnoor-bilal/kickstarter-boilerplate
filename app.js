import express from "express";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/", (req,res)=>{
    res.send("Kickstarter API Boilerplate");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});