"use client";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [printAge, setPrintAge] = useState("");
  const [printName, setPrintName] = useState("");
  function ageChanging(e) {
    setAge(e.target.value);
  }
  function printingAge() {
    setPrintAge(age);
    console.log("working");
  }
  function printingName() {
    setPrintName(name);
  }
  return (
    <div className="flex justify-center bg-[aqua]">
      <div className="flex flex-col items-center gap-6 mt-40 bg-amber-600 rounded-mb border-[gray] border-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-3 w-fit">
            <div>
              <input
                className="bg-violet-300 w-80 h-10 rounded-md text-black text-[20px] px-3 placeholder:text-[15px] "
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                value={age}
                onChange={ageChanging}
                placeholder="Your Age"
                className="bg-violet-300 w-80 h-10 rounded-md text-black text-[20px] px-3 placeholder:text-[15px] "
              />
            </div>
          </div>
          <button
            className="bg-[#1877f2] text-white font-bold text-xl w-full h-10 rounded-md"
            onClick={() => {
              setName("");
              setAge("");
              printingAge();
              printingName();
            }}
          >
            Log in
          </button>
        </div>
        <div className="bg-[#268cc7] p-5 flex flex-col gap-3 rounded-md">
          <h1 className="font-bold">Is this correct?</h1>
          <p>Your Name : {printName}</p>
          <p>Your Age : {printAge}</p>
        </div>
      </div>
    </div>
  );
}
