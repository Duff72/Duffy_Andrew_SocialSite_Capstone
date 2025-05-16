import express from "express";
import {
  seedPosts,
  getAllPosts,
  deletePost,
  updatePost,
  createPost,
  getPost,
  deleteAllPosts,
} from "../controllers/postController.js";
const router = express.Router();

router.get("/seed", seedPosts);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/all", deleteAllPosts);
router.delete("/:id", deletePost);

export default router;
