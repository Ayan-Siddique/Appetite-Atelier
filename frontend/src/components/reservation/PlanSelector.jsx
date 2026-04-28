import { useBooking } from "../../context/BookingContext";

const plans = [
  { name: "Elite", price: 999 },
  { name: "Premium", price: 1499 },
  { name: "Luxury", price: 1999 },
];

const PlanSelector = () => {
  const { booking, setBooking } = useBooking();

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-[var(--heading)] mb-6">Select Plan</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isSelected = booking.plan === plan.name;

          return (
            <div
              key={plan.name}
              onClick={() =>
                setBooking((prev) => ({
                  ...prev,
                  plan: plan.name,
                }))
              }
              className={`
                p-6 rounded-xl cursor-pointer transition-all duration-300 border
                ${
                  isSelected
                    ? "border-[var(--primary)] bg-[var(--surface)]"
                    : "border-gray-800 bg-[var(--surface)] hover:border-[var(--primary)]"
                }
              `}
            >
              <p className="text-[var(--primary)] text-lg font-bold mb-2">
                0{index + 1}
              </p>

              <h3 className="text-xl text-[var(--heading)] mb-2">
                {plan.name}
              </h3>

              <p className="text-[var(--text)] mb-4">
                Premium dining experience with curated services.
              </p>

              <p className="text-[var(--primary)] font-bold text-lg">
                ₹{plan.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanSelector;
