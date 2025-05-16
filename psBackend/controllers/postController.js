import Post from "../models/postModel.js";

async function seedPosts(req, res) {
  try {
    await Post.deleteMany({});
    await Post.create(
      {
        post: "This is a sample post",
        tags: "sample, post",
        dateCreated: new Date("2025-01-01T12:00:00Z"),
      },
      {
        post: "This is another sample post",
        tags: "another, sample, post",
        dateCreated: new Date("2025-01-02T15:30:00Z"),
      }
    );
    res.status(201).json({ success: "Posts seeded!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatePost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteAllPosts(req, res) {
  try {
    await Post.deleteMany({});
    res.status(200).json({ message: "All posts deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  seedPosts,
  getAllPosts,
  deletePost,
  updatePost,
  createPost,
  getPost,
  deleteAllPosts,
};
