import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await MongoClient.connect(
      "mongodb://adminMon9oUat:Muf_2021@10.22.15.66:27017/muf_aprw?authSource=admin&readPreference=primary&directConnection=true&ssl=false"
    );
    
    const db = client.db("muf_aprw");
    const collection = db.collection("credit_approvals");
    const matcher = req.body;

    const result = await collection.findOne(matcher);
    res.status(200).json({ application_no: result?.order_id });
  } catch (error) {
    res.status(500).json({ message: "Error from server while searching by MongoDB" });
  }
}

export default handler;
