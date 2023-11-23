import BookingCard from "./BookingCard";

export default async function BookingCatalog({ bookings }: { bookings: any }) {
  return (
    <div className="flex flex-row flex-wrap justify-around m-[20px]">
      {bookings.data.map((bookingItem: Object) => (
        <BookingCard
          BookingId={bookingItem._id}
          BookingDate={bookingItem.bookingDate}
          DentistName={bookingItem.dentist.name}
          DentistTel={bookingItem.dentist.tel}
          UserName={bookingItem.user.name}
          UserEmail={bookingItem.user.email}
          UserTel={bookingItem.user.tel}
        />
      ))}
    </div>
  );
}
