import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const blogsList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const AllBlogs = () => {
  return (
    <div className="home">
      {blogsList.map((blog) => (
        <div className="post" key={blog.id}>
          <Link className="link" to={`/blog/${blog.id}`}>
            <div>
              <img className="img" src={blog.img} alt="" />
            </div>
            <div className="content">
              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>
              <button>Read More</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
