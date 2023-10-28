import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Please enter a prompt"],
  },
  tag: {
    type: String,
    required: [true, "Please enter a tag"],
  },
});

const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;
