import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
    image: {
      type: String,
    },
    dateCreated: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
