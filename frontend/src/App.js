import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import Blog from "./components/Blog";
import UploadBlog from "./components/UploadBlog";
import UpdateBlog from "./components/UpdateBlog";
import Navbar from "./components/Navbar";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
        element: <UpdateBlog />,
      },
    ],
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
