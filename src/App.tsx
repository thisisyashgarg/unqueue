import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";

import AdminRegistration from "./components/AdminRegistration";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />

       {/* <Domains /> */}
      {/* yaha jo zaroori hai wo ayega */}
               {/* <AdminRegistration />  */}
              {/* <Dashboard /> */}
              <HomePage />

      <Domains />

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
