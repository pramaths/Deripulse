const axios = require("axios");
import { NextResponse } from "next/server";

export async function GET() {
  const res = await axios.get("http://localhost:8000/api/db");
  const poolData = res.data.PoolData;
  const flattenedPoolData = [].concat(...poolData); 
  const sortedPoolData = flattenedPoolData
    .slice()
    .sort((a, b) => b.apy - a.apy);

  const APR = [];
  for (const pool of sortedPoolData) {
    let data;

    data = {
      slug: pool.project,
      apy: pool.apy,
      symbol: pool.symbol,
    };
    APR.push(data);
  }

  return NextResponse.json(APR)
};
