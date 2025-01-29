import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-start  w-full flex-col px-4">
      <h1 className="mt-44 bg-clip-text text-emerald-800 text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-6xl font-sans py-2  z-20 font-bold ">
        Your mental wellness partner
      </h1>
      <h3 className="text-2xl md:text-4xl py-2 text-emerald-700">We help you declutter</h3>
      <p className=" text-xs pt-10 md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        We built Sachetana to help students keep track of their mental health<br/> and get access to professional consultation.
      </p>
    </BackgroundLines>
  );
}
