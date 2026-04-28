const BookingTable = ({ bookings }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border border-gray-700 text-sm">
        <thead className="bg-[var(--surface)] text-[var(--heading)]">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Slot</th>
            <th className="p-3 border">Guests</th>
            <th className="p-3 border">Plan</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="text-[var(--text)]">
              <td className="p-3 border">{b.bookingId}</td>
              <td className="p-3 border">{b.user.name}</td>
              <td className="p-3 border">{b.date}</td>
              <td className="p-3 border">{b.slot}</td>
              <td className="p-3 border">{b.guests}</td>
              <td className="p-3 border text-[var(--primary)]">{b.plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
