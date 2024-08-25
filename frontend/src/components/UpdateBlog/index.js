import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/blog/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedBlog = { title, content };
      await axios.put(`http://localhost:3001/blog/${id}`, updatedBlog);
      alert("Blog updated successfully");
      navigate(`/blog/${id}`);
    } catch (error) {
      console.error("Error updating blog:", error);
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBlog;
