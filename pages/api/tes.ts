import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const request = await fetch(`${process.env.TEST}`, {
      // body: JSON.stringify(req.body),
      method: req.method,
      // headers: { "Content-Type": "application/json" },
    });
    const data = await request.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: `Data in PostgreSQL DB is not found.`,
    });
  }
}
