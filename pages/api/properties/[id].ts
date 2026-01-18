import type { NextApiRequest, NextApiResponse } from "next";
import { properties } from "@/data/properties";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

  const { id } = req.query;
  const property = properties.find((p) => p.id === String(id));

  if (!property) return res.status(404).json({ message: "Property not found" });
  return res.status(200).json(property);
}
