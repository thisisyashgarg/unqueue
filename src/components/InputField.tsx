import React from "react";

export default function InputField({ label, input }) {
  return (
    <label className="flex flex-col p-4">
      <p className="font-semibold">{label} </p>
      <input
        className="p-4 input-color border-solid border-4 border-gray-50"
        placeholder={input}
      />
    </label>
  );
}
