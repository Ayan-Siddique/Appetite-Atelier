import express from "express";
import cors from "cors";
// import dotenv from "dotenv";

// importing routes
import bookingRoutes from "./routes/booking.route.js";

// dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/bookings", bookingRoutes);

export default app;
