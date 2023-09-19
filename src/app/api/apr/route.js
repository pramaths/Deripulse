const axios = require("axios");
import { NextResponse } from "next/server";
let res;

async function logo(slug) {
  const protocolData = res.data.arrProtocolData;
  const resp = protocolData.filter((prot) => prot.slug === slug);
  return resp[0].logo;
}
export async function GET() {
  const res = await axios.get("http://localhost:3000/api/db");
  const poolData = res.data.PoolData;
  const flattenedPoolData = [].concat(...poolData);
  const sortedPoolData = flattenedPoolData
    .slice()
    .sort((a, b) => b.apyPct1D - a.apyPct1D);

  const APR = [];
  for (const pool of sortedPoolData) {
    let data;
    data = {
      slug: pool.project,
      apy1D: pool.apyPct1D,
      symbol: pool.symbol,
      tvlUSD: pool.tvlUsd,
      apy7D: pool.apyPct7D,
      apy30D: pool.apyPct30D,
      apy:pool.apy,
      prediction: pool.predictions,
      logo: await logo(pool.project),
    };
    APR.push(data);
  }

  return NextResponse.json(APR);
}