import React from "react";

export default function InputField({
  label,
  input,
  value,
  onChange,
  name,
  type,
  minLength,
}) {
  return (
    <label className="flex flex-col p-4">
      <p className="font-semibold p-1">{label} </p>
      <input
        className="p-4 input-color border-solid border-4 border-gray-50 rounded-md focus:outline-none"
        placeholder={input}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        minLength={minLength}
      />
    </label>
  );
}

//to size the button with input use : mx-[-16px]
