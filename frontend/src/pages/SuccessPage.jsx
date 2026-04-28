import { useBooking } from "../context/BookingContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const { booking } = useBooking();
  const navigate = useNavigate();

  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    // Redirect if no booking data
    if (!booking?.user?.name) {
      navigate("/");
      return;
    }

    // Generate ID only for display (you already saved it in backend)
    const id = booking.bookingId || "BK" + Date.now().toString().slice(-6);
    setBookingId(id);
  }, [booking, navigate]);

  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-[var(--surface)] rounded-2xl p-8 border border-gray-800">
        <h1 className="text-3xl text-[var(--heading)] mb-4 text-center">
          Booking Confirmed 🎉
        </h1>

        <p className="text-[var(--text)] text-center mb-8">
          Your reservation has been successfully placed.
        </p>

        {/* Booking ID */}
        <div className="text-center mb-6">
          <p className="text-sm text-[var(--text)]">Booking ID</p>
          <p className="text-xl text-[var(--primary)] font-bold">{bookingId}</p>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Booking Details */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-[var(--text)]">Name</span>
            <span className="text-[var(--heading)]">{booking.user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[var(--text)]">Date</span>
            <span className="text-[var(--heading)]">{booking.date}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[var(--text)]">Time Slot</span>
            <span className="text-[var(--heading)]">{booking.slot}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[var(--text)]">Guests</span>
            <span className="text-[var(--heading)]">{booking.guests}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[var(--text)]">Plan</span>
            <span className="text-[var(--primary)] font-semibold">
              {booking.plan}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
