import React from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";
import AdminRegistration from "./components/AdminRegistration";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar />
       {/* <Domains /> */}
      {/* yaha jo zaroori hai wo ayega */}
               {/* <AdminRegistration />  */}
              {/* <Dashboard /> */}
              <HomePage />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
