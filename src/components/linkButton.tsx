"use client";

import { useRouter } from 'next/navigation';

export default function LinkButton({
  Text,
  Path,
}: {
  Text: string;
  Path: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        router.push(Path);
      }}
      className="mx-[40%] bg-white text-gray-600 border-gray-600 font-semibold py-2 px-2 m-2 rounded z-30 hover:bg-gray-600 hover:text-white hover:border-transparent"
    >
      {Text}
    </button>
  );
}
