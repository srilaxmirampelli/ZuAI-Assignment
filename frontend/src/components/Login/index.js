import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Login = () => {
  return (
    <div className="authentication">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
