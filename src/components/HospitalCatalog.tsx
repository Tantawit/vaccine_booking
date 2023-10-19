import HospitalCard from "./HospitalCard";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalJsonReady = await hospitalJson;
  return (
    <div className="flex flex-row flex-wrap justify-around m-[20px]">
      {hospitalJsonReady.data.map((hospitalItem: Object) => (
        <HospitalCard
          HospitalName={hospitalItem.name}
          HospitalImagePath={hospitalItem.picture}
          HospitalId={hospitalItem.id}
        />
      ))}
    </div>
  );
}
