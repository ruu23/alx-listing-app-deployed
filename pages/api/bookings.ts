import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const booking = req.body;

  // Basic validation (you can expand)
  if (!booking?.firstName || !booking?.email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Mock success response
  return res.status(201).json({
    message: "Booking created",
    bookingId: `b_${Date.now()}`,
  });
}
