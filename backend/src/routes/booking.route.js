import express from "express";
import {
  createBooking,
  getBookings,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Create a booking
router.post("/", createBooking);

// Get all bookings (admin)
router.get("/", getBookings);

export default router;