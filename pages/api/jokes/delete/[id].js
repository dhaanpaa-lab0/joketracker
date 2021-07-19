import {connectToDatabase} from "../../../../util/mongodb";
const { ObjectId } = require("mongodb");

export default async function handler(req, res) {
    const { id } = req.query
    const { db } = await connectToDatabase();
    console.log(req.query);

    const coll = db.collection("jokes");
    const result = await coll.deleteOne({_id:ObjectId(id)});
    res.json({});
}
