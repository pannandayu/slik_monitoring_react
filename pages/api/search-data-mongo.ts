import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new MongoClient(`${process.env.MONGO_URI}`);

  try {
    await client.connect();

    const db = client.db("muf_aprw");
    const collection = db.collection("credit_approvals");
    const matcher = req.body;

    const result = await collection.findOne(matcher);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error from server while searching by MongoDB" });
  } finally {
    client.close();
  }
}
