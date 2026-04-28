import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },

    date: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          const selectedDate = new Date(value);
          const today = new Date();

          // Reset time to compare only dates
          today.setHours(0, 0, 0, 0);

          return selectedDate >= today;
        },
        message: "Date cannot be in the past",
      },
    },

    slot: {
      type: String,
      required: true,
      enum: ["Lunch", "Dinner"],
    },

    guests: {
      type: Number,
      required: true,
      min: [1, "Guests must be at least 1"],
      max: [20, "Maximum 20 guests allowed"],
    },

    plan: {
      type: String,
      required: true,
      enum: ["Elite", "Premium", "Luxury"],
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },

    user: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;