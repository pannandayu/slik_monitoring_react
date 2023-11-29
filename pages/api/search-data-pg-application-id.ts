import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const request: {
      status: number;
      ok: boolean;
      json: () => Promise<any>;
    } = await fetch(`${process.env.JAVA_URL_APPLICATION_ID}`, {
      body: JSON.stringify(req.body),
      method: req.method,
      headers: { "Content-Type": "application/json" },
    });

    const data: {
      errorMessage?: string;
    } = await request.json();

    if ((request.status !== 200 || !request.ok) && data.errorMessage) {
      res.status(400).json({ message: data.errorMessage });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Error in api/search-data-pg-application-id, please try to re-search." });
  }
}
