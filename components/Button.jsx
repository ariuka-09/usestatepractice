"use client";
import { useState } from "react";
export function Button() {
  const [number, setNumber] = useState(1);
  const nem = () => {
    setNumber(number + 1);
  };
  return (
    <div className="flex flex-col w-fit gap-4">
      <div
        className="cursor-pointer w-20 h-10 bg-amber-500 rounded-md"
        onClick={nem}
      ></div>
      <p className=" px-6 py-2 inline rounded-[20px] bg-[violet] text-center ">
        {number}
      </p>
    </div>
  );
}
