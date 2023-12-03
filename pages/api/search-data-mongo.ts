import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let client;
  try {
    client = new MongoClient(`${process.env.MONGO_URI}`);
    await client.connect();

    const db = client.db("muf_aprw");
    const collection = db.collection("credit_approvals");
    const matcher = req.body;

    const result = await collection.findOne(matcher);

    if (!result) {
      res.status(400).json({
        notFound: "Data not found in MongoDB Credit Approvals collection.",
      });
    } else {
      res.status(200).json({ data: result });
    }
  } catch (error) {
    res.status(500).json({
      errorMessage: "Error in Search API MongoDB, please try again later.",
    });
  } finally {
    client?.close();
  }
}
