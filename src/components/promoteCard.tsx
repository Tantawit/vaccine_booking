"use client";

import { useState } from "react";

import useWindowListener from "../app/hook/useWindowListener";
import { VlogPlayer } from "./VlogPlayer";

export function PromoteCard({ vdoSrc }: { vdoSrc: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });

  return (
    <div className="w-[70%] mx-[10%] my-10 flex flex-row">
      <VlogPlayer vdoSrc={vdoSrc} isPlaying={isPlaying} />
      <div className="w-[20%] self-center p-[10px]">
        {" "}
        Get your vaccine today
        <button
          className="w-[100px] h-[50px] mt-[100px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
