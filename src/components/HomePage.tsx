import logo from "../images/homepage.svg";
import React from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center p-10 ">
      <Heading heading="What is UnQueue?" />
      <img src={logo} className="pt-16" />

      <ul className="space-y-2 text-2xl p-16 font-semibold">
        <li> • Eliminate physical queues</li>
        <li> • Join virtual queues from your device</li>
        <li> • Receive turn notifications</li>
        <li> • Convenient and efficient</li>
      </ul>

      <ButtonCTA text="Get Started" />
    </div>
  );
}
