import React from "react";

export default function AvgWaitingTime() {

  const [waitingTime, setWaitingTime] = React.useState(0);

  function AverageWaitingTime(prevWaitingTime : number){
    // return setWaitingTime([...prevWaitingTime,'']);
  }

  return (
    <div className="grid grid-cols justify-center">

      <div className="grid grid-cols justify-center">
      <h1 className="font-bold">Average Waiting Time</h1>
      <h2 className="text-3xl pt-2 pl-12"><p> 10 mins / person </p></h2> 
      </div>

      <form className="pt-12">

        <label className="flex flex-col space-y-2">
         <h3 className="text-l font-semibold">QID of the User *</h3> 
        <input className="py-4 px-6  bg-gray-50 border-solid border-2  border-slate-300 focus:outline-none" placeholder="QID"/>
        </label>

        <div className="pt-8 pl-[4px]">
      <button className="px-48 bg-blue-400 py-5 text-white font-semibold">Add User</button>
      </div>

      <h2 className="pt-12 pl-56 text-lg font-semibold">Or</h2>

      <div className="pt-8">
      <button className="px-44 bg-blue-400 py-5 text-white font-semibold">Scan QR Code</button>
      </div>

      </form>
    </div>
  );
}
