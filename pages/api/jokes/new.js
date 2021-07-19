import { connectToDatabase } from "../../../util/mongodb";
export default async (req, res) => {
    const { db } = await connectToDatabase();
    const rec = JSON.parse(req.body);
    await db
        .collection("jokes")
        .insertOne(rec);
    res.json(rec);
};
