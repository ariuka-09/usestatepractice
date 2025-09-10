"use client";
import { useState } from "react";
export function ButtonClone() {
  const [too, setToo] = useState(1);
  function nem() {
    setToo(too + 1);
  }
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={nem}
        className="w-20 h-10 bg-[red] rounded-md  "
      ></button>
      <p className="bg-[green]  p-2 rounded-[20px] text-center">{too}</p>
    </div>
  );
}
