import { useBooking } from "../../context/BookingContext";

const SlotPicker = () => {
  const { booking, setBooking } = useBooking();

  const slots = [
    { label: "Lunch", time: "12PM - 4PM" },
    { label: "Dinner", time: "7PM - 11PM" },
  ];

  const handleSelect = (selectedSlot) => {
    if (booking.slot === selectedSlot) return;

    setBooking((prev) => ({
      ...prev,
      slot: selectedSlot,
    }));
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl text-[var(--heading)] mb-6">Select Time Slot</h2>

      <div className="flex gap-6">
        {slots.map((slot) => {
          const isSelected = booking.slot === slot.label;

          return (
            <button
              key={slot.label}
              onClick={() => handleSelect(slot.label)}
              className={`
                px-8 py-4 rounded-xl border transition-all duration-300
                ${
                  isSelected
                    ? "bg-[var(--primary)] text-black border-[var(--primary)]"
                    : "bg-[var(--surface)] text-[var(--text)] border-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }
              `}
            >
              <p className="font-semibold">{slot.label}</p>
              <p className="text-sm opacity-70">{slot.time}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotPicker;
