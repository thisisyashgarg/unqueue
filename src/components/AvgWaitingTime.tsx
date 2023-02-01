import React, { useState } from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import InputField from "./InputField";
import axios from "axios";
import { handleChange } from "../utils/helper";

export default function AvgWaitingTime() {
  // const [waitingTime, setWaitingTime] = React.useState(0);

  // function AverageWaitingTime(prevWaitingTime: number) {
  //   // return setWaitingTime([...prevWaitingTime,'']);
  // }

  const [QID, setQID] = useState({
    qidValue: "",
  });

  async function postQID(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/submitQID", QID);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-cols justify-center ">
      <div className="flex flex-col justify-center">
        <Heading heading="Average Waiting Time" />
        <h2 className="text-2xl text-center">
          <p> 10 mins / person </p>
        </h2>
      </div>

      <form className="pt-12 " onSubmit={postQID}>
        <InputField
          label="QID of the User *"
          input="QID"
          value={QID.qidValue}
          name="qidValue"
          onChange={() => handleChange(setQID)}
        />

        <ButtonCTA text="Add User" />

        <h2 className=" p-10 text-lg font-semibold text-center">Or</h2>

        <ButtonCTA text="Scan QR" />
      </form>
    </div>
  );
}
