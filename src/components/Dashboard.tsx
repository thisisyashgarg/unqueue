import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvgWaitingTime from "./AvgWaitingTime";
import PeopleInQueue from "./PeopleInQueue";
import { auth } from "../data/auth";
import { onAuthStateChanged } from "@firebase/auth";
import { fetchData } from "../data/data";

export default function Dashboard() {
  const navigate = useNavigate();
  const [dataFromAPI, setDataFromAPI] = useState<object[]>([]);
  const [peopleInQueue, setPeopleInQueue] = useState<object[]>([]);
  // console.log(dataFromAPI);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user === null) {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    //adding api data into data from api
    // setDataFromAPI([
    //   { name: "yash", qid: "HOS1234" },
    //   { name: "ankit", qid: "HOS1235" },
    //   { name: "aman", qid: "HOS1236" },
    // ]);
    // console.log(dataFromAPI);
    fetchData(setDataFromAPI);
  }, []);

  return (
    <div className="grid grid-cols-2 pt-10">
      <PeopleInQueue
        peopleInQueue={peopleInQueue}
        setPeopleInQueue={setPeopleInQueue}
      />
      <AvgWaitingTime
        dataFromAPI={dataFromAPI}
        setPeopleInQueue={setPeopleInQueue}
      />
    </div>
  );
}
