import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rings } from "react-loader-spinner";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const AllBlogs = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  // Fetch blogs from the backend API
  const fetchBlogs = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    try {
      const response = await fetch("http://localhost:3001/blogs");
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setBlogsList(data);
          setApiStatus(apiStatusConstants.success);
        }
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const renderLoadingView = () => (
    <div className="blogs-loader-container">
      <Rings color="#0b69ff" height={50} width={50} />
    </div>
  );

  const renderFailureView = () => (
    <div className="blogs-error-view-container">
      <h1 className="blogs-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="blogs-failure-description">
        We are having some trouble processing your request. Please try again
        later.
      </p>
    </div>
  );

  const renderBlogsListView = () => (
    <div className="blogs-container">
      {blogsList.map((blog) => (
        <div className="blog" key={blog.id}>
          <img src={blog.image} alt={blog.title} />
          <div className="blog-content">
            <Link className="link" to={`/blog/${blog.id}`}>
              <h1>{blog.title}</h1>
              <p>{blog.content}</p>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAllBlogs = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderBlogsListView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return <div className="all-blogs-section">{renderAllBlogs()}</div>;
};

export default AllBlogs;
