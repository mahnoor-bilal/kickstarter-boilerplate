import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:String,
    description:String,
    goalAmount:Number
});

export default mongoose.model("Project",projectSchema);