import Image from "next/image";

import InteractiveCard from "./InteractiveCard";

export default function HospitalCard({
  HospitalName,
  HospitalImagePath,
}: {
  HospitalName: string;
  HospitalImagePath: string;
}) {
  return (
    <InteractiveCard contentName={HospitalName}>
      <div className="w-full h-[15%] p-[10px] text-center">{HospitalName}</div>
      <div className="w-full h-[85%] relative riunded-t-lg">
        <Image
          src={HospitalImagePath}
          alt="Hospital Image"
          fill={true}
          objectFit="cover"
          className="object-cover rounded-t-lg"
        />
      </div>
    </InteractiveCard>
  );
}
