export const generateBookingId = () => {
  const timestamp = Date.now().toString().slice(-6);
  return `BK${timestamp}`;
};
