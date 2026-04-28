import pkg from "twilio";
import dotenv from "dotenv";

dotenv.config();

const twilio = pkg;

export const sendWhatsAppMessage = async ({ phone, name, bookingId }) => {
  try {
    console.log("SID inside service:", process.env.TWILIO_ACCOUNT_SID);

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;

    const message = `Hi ${name} 👋\nYour booking is confirmed 🎉\nBooking ID: ${bookingId}`;

    await client.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:${formattedPhone}`,
      body: message,
    });

    console.log("WhatsApp message sent ✅");
  } catch (error) {
    console.error("WhatsApp Error FULL:", error);
  }
};
