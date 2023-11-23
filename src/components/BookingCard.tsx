import InteractiveCard from "./InteractiveCard";

export default function BookingCard({
  BookingId,
  BookingDate,
  DentistName,
  DentistTel,
  UserName,
  UserEmail,
  UserTel,
}: {
  BookingId: string;
  BookingDate: Date;
  DentistName: string;
  DentistTel: string;
  UserName: string;
  UserEmail: string;
  UserTel: string;
}) {
  return (
    <InteractiveCard contentName={DentistName}>
      <div className="w-full pt-[10px] text-center font-bold">
        Booking ID: {BookingId}
      </div>
      <div className="w-full pt-[5px] text-center text-sm">
        {BookingDate.toString()}
      </div>
      <div className="w-full pt-[5px] text-center text-sm">
        Dentist: {DentistName}
      </div>
      <div className="w-full pt-[10px] text-center text-sm">
        Dentist Tel: {DentistTel}
      </div>
      <div className="w-full pt-[5px] text-center text-sm">
        User Name: {UserName}
      </div>
      <div className="w-full pt-[5px] text-center text-sm">
        User Email: {UserEmail}
      </div>
      <div className="w-full pt-[5px] text-center text-sm">
        User Tel: {UserTel}
      </div>
    </InteractiveCard>
  );
}
