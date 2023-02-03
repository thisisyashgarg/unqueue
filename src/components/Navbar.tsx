import React from "react";
import Logo from "../images/logo unqueue.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const currentRoute = useLocation();

  return (
    <nav className="flex justify-between p-3 border border-b-gray-200">
      <Link to="/domains" className="flex">
        <img src={Logo} className="w-10" />
        <h1 className="font-semibold text-3xl px-3 text-gray-600">UnQueue</h1>
      </Link>
      {currentRoute.pathname === "/dashboard" && (
        <Link to="/login">
          <h2 className="text-xl font-normal">Logout</h2>
        </Link>
      )}
    </nav>
  );
}
