import type { Post } from "app/post/interfaces";
import type { Model } from "mongoose";
import mongoose, { model } from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

export default (mongoose.models.Post || model<Post>("Post", PostSchema)) as Model<Post>;
