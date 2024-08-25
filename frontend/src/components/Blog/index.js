import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/blog/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blogData = await response.json();
        setBlog(blogData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/blog/${id}`);
        alert("Blog deleted successfully");
        navigate("/"); // Redirect to the homepage after deletion
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete the blog");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="blog-container">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <div className="blog-actions">
        <Link to={`/upload/${blog.id}`}>
          <FaEdit className="icon" />
        </Link>
        <MdDeleteOutline className="icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Blog;
