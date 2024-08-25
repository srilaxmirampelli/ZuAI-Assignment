import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AllBlogs from "./components/AllBlogs";
import Blog from "./components/Blog";
import UploadBlog from "./components/UploadBlog";
import UpdateBlog from "./components/UpdateBlog"; // New component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllBlogs />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/upload",
        element: <UploadBlog />,
      },
      {
        path: "/upload/:id",
        element: <UpdateBlog />, // Route for updating blog
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
