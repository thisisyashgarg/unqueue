import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import axios from "axios";

export default function PeopleInQueue() {
  const [peopleInQueue, setPeopleInQueue] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // fetch people in queue from backend using axios, hold it in a state
    let dataFromAPI = [
      { name: "Yash Garg", qid: "HOS1234" },
      { name: "Ankit Pandey", qid: "HOS1234" },
      { name: "Aman Kumar", qid: "HOS1234" },
      { name: "Shauryam Saxena", qid: "HOS1234" },
      { name: "Shauryam Saxena", qid: "HOS1234" },
      { name: "Shauryam Saxena", qid: "HOS1234" },
      { name: "Shauryam Saxena", qid: "HOS1234" },
      { name: "Shauryam Saxena", qid: "HOS1234" },
    ];
    //ps: this is a dummy data
    setPeopleInQueue(dataFromAPI);
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="grid grid-cols justify-center overflow-scroll">
      <Heading heading="People In Queue" />
      {(showAll ? peopleInQueue : peopleInQueue.slice(0, 3)).map(
        (user) => {
          return (
            <div
              className=" flex flex-row border p-4 h-14 justify-center rounded-md bg-gray-50 "
            >
              <span className=" text-xl font-medium ">
                {user.name} - {user.qid}
              </span>
            </div>
          );
        }
      )}
      {peopleInQueue.length > 3 && (

        <button>
        <div
          className=" flex flex-row border p-4 h-14 justify-center rounded-md hover:bg-sky-400 bg-sky-500 text-white"
          onClick={toggleShowAll}
        >
          <span className=" text-xl font-medium hover:cursor-pointer">
            {showAll ? `Hide all ${peopleInQueue.length}` : `+${peopleInQueue.length - 3} other${peopleInQueue.length - 3 > 1 ? "s" : ""}`}
          </span>
        </div>
        </button>
      )}
    </div>
  );
}
