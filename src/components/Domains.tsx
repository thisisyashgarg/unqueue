import React, { useState, useEffect } from "react";
import { DOMAIN_DATA } from "../data";

export default function Domains() {
  return (
    <>
      <h2 className="text-4xl font-semibold text-center py-6 text-gray-600">
        Choose you Domain
      </h2>
      <main className="flex flex-wrap mx-10 justify-center ">
        {/* yaha 7 domains map karke daal denge */}
        {DOMAIN_DATA.map((domain) => {
          return (
            <a
              href="/homepage"
              className="flex flex-col py-4 bg-gray-50 border border-gray-300 m-4 p-4 rounded-md w-60 h-56 hover:shadow-lg "
            >
              <img src={domain.image} className="w-56 h-36" />
              <h2 className="font-medium text-center my-3">{domain.name}</h2>
            </a>
          );
        })}
      </main>
    </>
  );
}
