import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

let mongoClient;

async function fetchDataFromDatabase(chainName) {
  const database = mongoClient.db("deri-pulse");
  const collection = database.collection("wholeData");

  const result = await collection.findOne({}, { projection: { [`chainwise.${chainName}`]: 1 } });

  return result?.chainwise?.[chainName];
}

export async function GET(req, res) {
  console.log("here");
  if (req.method !== "GET") {
    return new NextResponse(405); 
  }

  const { chainName } = req.query;

  if (!chainName) {
    return NextResponse.json({ error: "Chain name not provided." });
  }

  try {
    mongoClient = await clientPromise;
    const responseData = await fetchDataFromDatabase(chainName);

    if (!responseData) {
      return NextResponse.json({ error: "Data for given chain not found." });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
