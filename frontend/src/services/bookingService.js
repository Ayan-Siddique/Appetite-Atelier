export const createBooking = async (bookingData) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    if (!res.ok) throw new Error("Booking failed");

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
  }
};

export const getBookings = async (query = "") => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/bookings${query}`
    );

    if (!res.ok) throw new Error("Fetch failed");

    return await res.json();
  } catch (error) {
    console.error("Fetch bookings error:", error);
  }
};