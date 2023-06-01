import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Blog title is required"],
      maxLength: [100, "Title length should be less than 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Blog author is required"],
      maxLength: [50, "Author name should be less than 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
