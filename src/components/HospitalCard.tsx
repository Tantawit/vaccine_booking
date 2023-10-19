import Image from 'next/image';
import Link from 'next/link';

import BasicRating from './basicRating';
import InteractiveCard from './InteractiveCard';

export default function HospitalCard({
  HospitalName,
  HospitalImagePath,
  HospitalId,
}: {
  HospitalName: string;
  HospitalImagePath: string;
  HospitalId: string;
}) {
  return (
    <InteractiveCard contentName={HospitalName}>
      <Link href={`/hospital/${HospitalId}`}>
        <div className="w-full h-[15%] p-[10px] text-center">
          {HospitalName}
        </div>
        <div className="w-full h-[85%] relative riunded-t-lg">
          <Image
            src={HospitalImagePath}
            alt="Hospital Image"
            fill={true}
            objectFit="cover"
            className="object-cover rounded-t-lg"
          />
        </div>
      </Link>
      <BasicRating />
    </InteractiveCard>
  );
}
