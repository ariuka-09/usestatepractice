"use client";
import { useState } from "react";
export function Squares() {
  const [squares, setSquares] = useState(1);
  const [incrementation, setIncrementation] = useState(3);
  const [index, setIndex] = useState(1);
  function nextSquare() {
    setSquares(squares + incrementation);
    nextIncrementation();
    nextIndex();
  }
  function nextIndex() {
    setIndex(index + 1);
  }
  function nextIncrementation() {
    setIncrementation(incrementation + 2);
    console.log("working");
  }

  return (
    <div className="">
      <div
        className="bg-white cursor-pointer border-2 text-black"
        onClick={nextSquare}
      >
        Click!-1
      </div>
      <p className="Squares bg-amber-600 text-white">
        The
        {index == 1 ? " " + index + "st " : ""}
        {index == 2 ? " " + index + "nd " : ""}
        {index == 3 ? " " + index + "rd " : ""}
        {index > 3 ? " " + index + "th " : ""}
        perfect square is:
        {" " + squares}
      </p>
    </div>
  );
}
//"The" {index + " th"} perfect square is: {squares}
