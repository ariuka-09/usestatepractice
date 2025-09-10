"use client";
import { Button } from "@/components/Button";
import { ButtonClone } from "@/components/ButtonClone";
import { Squares } from "@/components/squares";

export default function Home() {
  return (
    <div className="flex gap-4 p-10">
      <Button> </Button>
      <ButtonClone></ButtonClone>
      <Squares></Squares>
    </div>
  );
}
