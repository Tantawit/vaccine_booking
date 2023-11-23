import Image from "next/image";

import InteractiveCard from "./InteractiveCard";

export default function DentistCard({
  DentistName,
  DentistHospital,
  DentistAddress,
  DentistTel,
  DentistExpertist,
  DentistImagePath,
  DentistId,
}: {
  DentistName: string;
  DentistHospital: string;
  DentistAddress: string;
  DentistTel: string;
  DentistExpertist: string;
  DentistImagePath: string;
  DentistId: string;
}) {
  return (
    <InteractiveCard contentName={DentistName}>
      <div className="w-full h-[10%] pt-[10px] text-center font-bold">
        {DentistName}
      </div>
      <div className="w-full h-[10%] pt-[5px] text-center">
        -{DentistHospital}-
      </div>
      <div className="w-full h-[10%] pt-[5px] text-center">
        Expertist: {DentistExpertist}
      </div>
      <div className="w-full h-[10%] pt-[10px] text-center text-sm">
        Address: {DentistAddress}
      </div>
      <div className="w-full h-[10%] pt-[5px] text-center text-sm">
        Tel: {DentistTel}
      </div>

      <div className="w-full h-[85%] relative riunded-t-lg">
        <Image
          src={DentistImagePath}
          alt="Dentist Image"
          fill={true}
          objectFit="cover"
          className="object-cover rounded-t-lg"
        />
      </div>
    </InteractiveCard>
  );
}
