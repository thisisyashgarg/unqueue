import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import axios from "axios";

export default function PeopleInQueue() {
  const [peopleInQueue, setPeopleInQueue] = useState([]);

  useEffect(() => {
    // fetch people in queue from backend from axios, hold it in a  state
    let dataFromAPI = [
      {
        name: "Yash Garg",
        qid: "HOS1234",
      },
      {
        name: "Ankit Pandey",
        qid: "HOS1234",
      },
      {
        name: "Aman Kumar",
        qid: "HOS1234",
      },
      {
        name: "Shauryam Saxena",
        qid: "HOS1234",
      },
    ];
    //ps: this is a dummy data
    setPeopleInQueue(dataFromAPI);
  }, []);

  return (
    <div className="grid grid-cols justify-center overflow-scroll">
      <Heading heading="People In Queue" />

      {peopleInQueue.map((user) => {
        return (
          <div className=" flex flex-row border p-4 h-14 justify-center rounded-md bg-gray-50  ">
            <span className=" text-xl font-medium ">
              {user.name} - {user.qid}
            </span>
          </div>
        );
      })}
    </div>
  );
}
