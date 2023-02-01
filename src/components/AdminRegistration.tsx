import React, { useState } from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import InputField from "./InputField";
import axios from "axios";
import { handleChange } from "../utils/helper";

export default function AdminRegistration() {
  const [adminForm, setAdminForm] = useState({
    orgName: "",
    email: "",
  });

  async function postAdminFormData(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/submitAdminForm", adminForm);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Admin Registration" />
      <form
        className="flex flex-col space-y-4 py-10"
        onSubmit={postAdminFormData}
      >
        <InputField
          label="Organisation Name *"
          input="Full Name (as regd) *"
          value={adminForm.orgName}
          onChange={() => handleChange(setAdminForm)}
          name="orgName"
        />
        {/* <InputField label="Unique ID *" input="ID" /> */}
        <InputField
          label="Email ID (for verification) *"
          input="xyz@abc.com"
          value={adminForm.email}
          onChange={() => handleChange(setAdminForm)}
          name="email"
        />
        <ButtonCTA text="Register" />
      </form>
    </div>
  );
}
