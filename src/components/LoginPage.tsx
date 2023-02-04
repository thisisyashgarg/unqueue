import React, { useState } from "react";
import { handleChange } from "../utils/helper";
import Heading from "./Heading";
import InputField from "./InputField";
import ButtonCTA from "./ButtonCTA";
import { postLoginForm } from "../utils/postForms";
import { useNavigate } from "react-router-dom";
import { signInUserWithEmailPass } from "../data/Auth";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-10">
      <Heading heading="Login" />
      <form
        className="flex flex-col space-y-4 py-10"
        method="POST"
        onSubmit={(e) => {
          signInUserWithEmailPass(loginForm.email, loginForm.password);
          //   navigate("/dashboard");
          // now check if user is valid, if yes, then redirect to dashboard, otherwise 403
        }}
      >
        <InputField
          label="Email ID *"
          input="Email ID (as registered) *"
          value={loginForm.email}
          onChange={() => handleChange(setLoginForm)}
          name="email"
          type="email"
          minLength=""
        />

        <InputField
          label="Password *"
          input="********"
          value={loginForm.password}
          onChange={() => handleChange(setLoginForm)}
          name="password"
          type="password"
          minLength="8"
        />

        <ButtonCTA text="Login" />
      </form>
    </div>
  );
}
