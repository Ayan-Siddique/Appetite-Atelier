import SlotPicker from "../components/reservation/SlotPicker";
import PlanSelector from "../components/reservation/PlanSelector";
import BookingForm from "../components/reservation/BookingForm";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

// services
import { createBooking } from "../services/bookingService";
import { generateBookingId } from "../utils/generateBookingId";

const ReservationPage = () => {
  const navigate = useNavigate();
  const { booking } = useBooking();

  const showPlan = booking.slot;
  const showForm = booking.slot && booking.plan;

  const handleSubmit = async () => {
    if (!booking.date || !booking.slot || !booking.plan) {
      alert("Please complete booking details");
      return;
    }

    // Generate ID
    const bookingId = generateBookingId();

    // Prepare data
    const finalBooking = {
      ...booking,
      bookingId,
    };

    // Call backend
    const response = await createBooking(finalBooking);

    if (response?.success) {
      navigate("/success");
    } else {
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-[var(--heading)] mb-10">
          Book Your Experience
        </h1>

        {/* Step 1 */}
        <SlotPicker />

        {/* Step 2 */}
        {showPlan && (
          <div className="animate-fadeIn">
            <PlanSelector />
          </div>
        )}

        {/* Step 3 */}
        {showForm && (
          <div className="animate-fadeIn">
            <BookingForm />
          </div>
        )}

        {/* Final CTA */}
        {showForm && (
          <button
            onClick={handleSubmit}
            className="mt-10 w-full py-4 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all"
          >
            Proceed to Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
