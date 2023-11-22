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
      <div className="w-[50%] self-center p-[30px]">
        😁 Smile Brighter !!! 📖 Book Smarter !!! 💖 Get Healthier !!! <br />
        Easy online booking for expert dental care. <br />
        Get your confident smile with a click!
        <button
          id="play-button"
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
