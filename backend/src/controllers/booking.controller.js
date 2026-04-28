import Booking from "../models/booking.js";
import { sendWhatsAppMessage } from "../services/whatsapp.service.js";

export const createBooking = async (req, res) => {
  try {
    const { bookingId, date, slot, guests, plan, user } = req.body;

    // Basic validation
    if (
      !bookingId ||
      !date ||
      !slot ||
      !guests ||
      !plan ||
      !user?.name ||
      !user?.phone
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Create booking
    const booking = new Booking({
      bookingId,
      date,
      slot,
      guests,
      plan,
      user,
    });

    // Save to DB
    const savedBooking = await booking.save();
    sendWhatsAppMessage({
      phone: user.phone,
      name: user.name,
      bookingId: bookingId,
    });

    res.status(201).json({
      success: true,
      data: savedBooking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while creating booking",
    });
  }
};

// get all bookings - for admin dashboard

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Get Bookings Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while fetching bookings",
    });
  }
};
