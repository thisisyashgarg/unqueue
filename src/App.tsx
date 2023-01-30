import React from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Domains />
      {/* yaha jo zaroori hai wo ayega */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
