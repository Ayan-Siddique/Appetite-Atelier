import { useBooking } from "../../context/BookingContext";

const BookingForm = () => {
  const { booking, setBooking } = useBooking();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["name", "email", "phone"].includes(name)) {
      setBooking({
        ...booking,
        user: {
          ...booking.user,
          [name]: value,
        },
      });
    } else {
      setBooking({
        ...booking,
        [name]: value,
      });
    }
  };

  return (
    <div className="mt-12 grid md:grid-cols-2 gap-6">
      <input
        type="date"
        name="date"
        onChange={handleChange}
        className="p-4 rounded-lg bg-[var(--surface)] text-white border border-gray-700 focus:border-[var(--primary)] outline-none"
      />

      <input
        type="number"
        name="guests"
        placeholder="Guests"
        onChange={handleChange}
        className="p-4 rounded-lg bg-[var(--surface)] text-white border border-gray-700 focus:border-[var(--primary)] outline-none"
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="p-4 rounded-lg bg-[var(--surface)] text-white border border-gray-700 focus:border-[var(--primary)] outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="p-4 rounded-lg bg-[var(--surface)] text-white border border-gray-700 focus:border-[var(--primary)] outline-none"
      />

      <input
        type="text"
        name="phone"
        placeholder="WhatsApp Number"
        onChange={handleChange}
        className="p-4 rounded-lg bg-[var(--surface)] text-white border border-gray-700 focus:border-[var(--primary)] outline-none md:col-span-2"
      />
    </div>
  );
};

export default BookingForm;
