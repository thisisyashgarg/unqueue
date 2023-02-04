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
    ConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Admin Registration" />
      <form 
      action=""
        method="POST"
        className="flex flex-col space-y-4 py-10"
        onSubmit={(e) => {
          if (adminForm.password === adminForm.ConfirmPassword) {
            postAdminFormData(e, adminForm);
            navigate("/emailsent");
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
          type={"text"}
        />

        <InputField
          label="Email ID (for verification) *"
          input="xyz@abc.com"
          value={adminForm.email}
          onChange={() => handleChange(setAdminForm)}
          name="email"
          type={"text"}
        />
        {/* <div className="flex "> */}
        <InputField
          label="Password *"
          input="********"
          value={adminForm.password}
          onChange={() => handleChange(setAdminForm)}
          name="password"
          type={showPassword ? "text" : "password"}
        />
        {/* <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button> */}
        {/* </div> */}

        <InputField
          label="Confirm Password *"
          input="********"
          value={adminForm.ConfirmPassword}
          onChange={() => handleChange(setAdminForm)}
          name="ConfirmPassword"
          type="password"
        />
        <ButtonCTA text="Register " />
      </form>
    </div>
  );
}
