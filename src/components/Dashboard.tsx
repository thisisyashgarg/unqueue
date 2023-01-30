import React from "react";
import AvgWaitingTime from "./AvgWaitingTime";
import Navbar from "./Navbar";
import PeopleInQueue from "./PeopleInQueue";

export default function Dashboard() {
  return (
    <div>
      <PeopleInQueue />
      <AvgWaitingTime />
    </div>
  );
}
