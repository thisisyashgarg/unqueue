import React from "react";

export default function ButtonCTA({ text }) {
  return (
    <a>
      <button className="px-48 py-5 text-white font-semibold primary-color text-center">
        {text}
      </button>
    </a>
  );
}
