import React from "react";
import { DOMAIN_DATA } from "../data";

export default function Domains() {
  return (
    <>
      <h2 className="text-2xl font-medium text-center py-6">
        Choose you Domain
      </h2>
      <main className="flex flex-wrap mx-10 ">
        {/* yaha 7 domains map karke daal denge */}
        {DOMAIN_DATA.map((domain) => {
          return (
            <div className="flex flex-col py-4">
              <img src={domain.image} className="w-72 h-48 py-2" />
              <h2 className="font-medium">{domain.name}</h2>
            </div>
          );
        })}
      </main>
    </>
  );
}
