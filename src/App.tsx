import React from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";
import AdminRegistration from "./components/AdminRegistration";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/domains",
        element: <Domains />,
      },
      {
        path: "/admin",
        element: <AdminRegistration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
