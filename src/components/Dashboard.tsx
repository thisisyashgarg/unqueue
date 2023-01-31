import React from "react";
import AvgWaitingTime from "./AvgWaitingTime";
import Navbar from "./Navbar";
import PeopleInQueue from "./PeopleInQueue";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 pt-10">
      <PeopleInQueue />
      <AvgWaitingTime />
    </div>
  );
}
