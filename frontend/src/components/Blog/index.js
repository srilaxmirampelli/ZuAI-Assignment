import React from "react";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="blog"
      />
      <p>Posted 2 days ago</p>
      <Link to={"/upload?edit=1"}>
        <FaEdit className="icon" />
      </Link>
      <MdDeleteOutline className="icon" />
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
        excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
        ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
        corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
        possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
        dolorem ratione sit debitis deserunt repellendus numquam ab vel
        perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere
        aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam
        ab vel perspiciatis corporis!
      </p>
    </>
  );
};

export default Blog;
