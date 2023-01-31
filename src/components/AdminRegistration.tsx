import React from "react";

export default function AdminRegistration() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="flex font-semibold items-center">Admin Registration</h1>
      <form className="flex flex-col space-y-12 py-10">
         

        <label className="flex flex-col"><p className="font-semibold">Organisation Name * </p> <br />
        <input className="p-4 input-color border-solid border-4 border-gray-50" placeholder="Full Name (as regd) * "/>
        </label>

        <label className="flex flex-col"><p className="font-semibold">Unique ID *</p> <br />
        <input className="p-4 bg-gray-50 border-solid border-4 border-gray-50" placeholder="ID"/>
        </label>

        <label className="flex flex-col"><p className="font-semibold">Email ID ( for verification ) *</p> <br />
        <input className="p-4 bg-gray-50 border-solid border-4 border-gray-50" placeholder="xyz@abc.com"/>
        </label>

        <button className="px-80 bg-blue-400 py-6 text-white font-semibold">Register</button>
      </form>
    </div>
  );
}
