import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  projectId: String,
  investorId: String,
  amount: Number,
});

export default mongoose.model("Investment", investmentSchema);