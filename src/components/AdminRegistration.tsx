import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import InputField from "./InputField";
import { handleChange } from "../utils/helper";
import { postAdminFormData } from "../utils/postForms";

export default function AdminRegistration() {
  const [adminForm, setAdminForm] = useState({
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Admin Registration" />
      <form
        className="flex flex-col space-y-4 py-10"
        onSubmit={(e) => {
          if (adminForm.password === adminForm.confirmPassword) {
            postAdminFormData(e, adminForm);
            navigate("/dashboard");
          } else {
            // Show an error message or alert to the user
            alert("Password and Confirm Password must be same.");
          }
        }}
      >
        <InputField
          label="Organisation Name *"
          input="Full Name (as regd) *"
          value={adminForm.orgName}
          onChange={() => handleChange(setAdminForm)}
          name="orgName"
          type="text"
        />
        {/* <InputField label="Unique ID *" input="ID" /> */}
        <InputField
          label="Email ID (for verification) *"
          input="xyz@abc.com"
          value={adminForm.email}
          onChange={() => handleChange(setAdminForm)}
          name="email"
          type="email"
        />
        <InputField
          label="Password *"
          input="********"
          value={adminForm.password}
          onChange={() => handleChange(setAdminForm)}
          name="password"
          type="password"
        />

        <InputField
          label="Confirm Password *"
          input="********"
          value={adminForm.confirmPassword}
          onChange={() => handleChange(setAdminForm)}
          name="confirmPassword"
          type="password"
        />
        <ButtonCTA text="Register " />
      </form>
    </div>
  );
}
