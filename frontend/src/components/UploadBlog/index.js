import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const blogData = { title, content };
      const response = await axios.post("http://localhost:3001/blog", blogData);
      alert("Blog created successfully");
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="content">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="editor"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" id="file" />
      <label htmlFor="file">Upload Image</label>
      <button onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default UploadBlog;
