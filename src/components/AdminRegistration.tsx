import React from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import InputField from "./InputField";

export default function AdminRegistration() {
  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Admin Registration" />
      <form className="flex flex-col space-y-4 py-10">
        <InputField label="Organisation Name *" input="Full Name (as regd) *" />
        <InputField label="Unique ID *" input="ID" />
        <InputField label="Email ID (for verification) *" input="xyz@abc.com" />
        <ButtonCTA text="Register" />
      </form>
    </div>
  );
}
