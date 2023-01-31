import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";
import AdminRegistration from "./components/AdminRegistration";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AvgWaitingTime from "./components/AvgWaitingTime";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <AdminRegistration />
      {/* <Dashboard />
     
      <Domains /> */}
      {/* <HomePage /> */}
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // all children go into outlet
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
