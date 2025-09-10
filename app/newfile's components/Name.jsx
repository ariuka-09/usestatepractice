"use client";
import { useState } from "react";
export function Name() {
  const [name, setName] = useState("Check your name");
  const nameChanger = () => {
    setName("Ariuntuguldur");
  };
  return (
    <div className="p-10 flex gap-4 flex-col w-fit">
      <p className="p-3 w-30 bg-amber-800 text-white rounded-md">{name}</p>
      <button
        className="w-full py-3 bg-[green] rounded-md"
        onClick={nameChanger}
      >
        Click
      </button>
    </div>
  );
}
