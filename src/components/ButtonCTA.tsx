import React from "react";

export default function ButtonCTA({ text }) {
  return (
    <a>
      <button
        className="px-48 py-5 rounded-md text-white font-semibold primary-color text-center hover:bg-sky-500 active:bg-sky-600"
        type="submit"
      >
        {text}
      </button>
    </a>
  );
}
