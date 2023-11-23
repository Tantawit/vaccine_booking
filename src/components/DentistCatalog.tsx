import DentistCard from "./DentistCard";

export default async function DentistCatalog({
  dentistJson,
}: {
  dentistJson: Object;
}) {
  const dentistJsonReady = await dentistJson;
  return (
    <div className="flex flex-row flex-wrap justify-around m-[20px]">
      {dentistJsonReady.data.map((dentistItem: Object) => (
        <DentistCard
          DentistName={dentistItem.name}
          DentistHospital={dentistItem.hospital}
          DentistAddress={dentistItem.address}
          DentistTel={dentistItem.tel}
          DentistExpertist={dentistItem.expertist}
          DentistImagePath={dentistItem.picture}
          DentistId={dentistItem.id}
        />
      ))}
    </div>
  );
}
