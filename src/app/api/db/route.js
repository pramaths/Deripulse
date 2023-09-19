import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

let mongoClient;
async function fetchDataFromDatabase() {
  const database = mongoClient.db("deri-pulse");
  const collection = database.collection("wholeData");
  const cachedData = await collection.find({}).toArray();
  return cachedData;
}

export async function GET(req,res) {
  console.log("here");
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    mongoClient = await clientPromise;
    const responseData = await fetchDataFromDatabase();

    return NextResponse.json(responseData[0]);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error });
  }
}