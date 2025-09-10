"use client";
import { useState } from "react";
export function StudentAge() {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  //   setStudentName(document.getElementById("Name"));
  //   setStudentAge(document.getElementById("Age"));
  return (
    <div className="flex flex-col gap-4 p-10 w-fit">
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <p>Enter your name: </p>
          <input
            type="text"
            id="Name"
            className="w-40 h-10 rounded bg-black text-white border-2 border-white"
          />
        </div>
        <div className="flex flex-col">
          <p>Enter your age: </p>
          <input
            type="text"
            id="Age"
            className="w-40 h-10 rounded bg-black text-white border-2 border-white"
          />
        </div>
      </div>

      <div className="w-fit">
        <p className="p-3 bg-violet-500 text-black rounded-[20px]">
          Student Name: {studentName} Student Age:{studentAge}
        </p>
      </div>
    </div>
  );
}
