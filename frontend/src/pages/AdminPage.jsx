import { useEffect, useState } from "react";
import { getBookings } from "../services/bookingService";
import BookingTable from "../components/admin/BookingTable";

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async (query = "") => {
    const res = await getBookings(query);
    if (res?.success) {
      setBookings(res.data);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-[var(--heading)] mb-6">Admin Dashboard</h1>

        <BookingTable bookings={bookings} />
      </div>
    </div>
  );
};

export default AdminPage;
