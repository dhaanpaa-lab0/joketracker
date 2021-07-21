import {connectToDatabase} from "../../../../util/mongodb";
const { ObjectId } = require("mongodb");

export default async function handler(req, res) {
    const { id } = req.query
    const { db } = await connectToDatabase();

    const reqBody = JSON.parse(req.body);
    const coll = db.collection("jokes");
    const result = await coll.updateOne({_id:ObjectId(id)}, {
        $set: {
            joke: reqBody.joke
        }
    });
    res.json({});
}
