const db = require("../database");

// Create a new post
exports.createPost = (req, res) => {
  const { title, content} = req.body;
  console.log(title, content);

  db.run(
    "INSERT INTO blogs (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      if (err) {
        return res.status(500).send("Error creating post");
      }
      res.status(201).json({ id: this.lastID, title, content});
    }
  );
};

// Get all posts
exports.getAllPosts = (req, res) => {
  db.all("SELECT * FROM blogs", [], (err, rows) => {
    if (err) {
      return res.status(500).send("Error retrieving posts");
    }
    res.status(200).json(rows);
  });
};

// Get a specific post by ID
exports.getPostById = (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).send("Error retrieving post");
    }
    if (!row) {
      return res.status(404).send("Post not found");
    }
    res.status(200).json(row);
  });
};

// Update a post by ID
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content} = req.body;
  db.run(
    "UPDATE blogs SET title = ?, content = ? WHERE id = ?",
    [title, content, id],
    function (err) {
      if (err) {
        return res.status(500).send("Error updating post");
      }
      if (this.changes === 0) {
        return res.status(404).send("Post not found");
      }
      res.status(200).json({ message: "Post updated successfully" });
    }
  );
};

// Delete a post by ID
exports.deletePost = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM blogs WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).send("Error deleting post");
    }
    if (this.changes === 0) {
      return res.status(404).send("Post not found");
    }
    res.status(200).json({ message: "Post deleted successfully" });
  });
};
