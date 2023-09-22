import axios from "axios";
import TVLChart from "../chartNetTVL";
import { NextResponse } from "next/server";

export async function GET(request,{ params }) {
  const chain = params.chains;
  try {
    const backendResponse = await axios.get(`https://deripulse.com/api/db/`);
    const protocolData = backendResponse.data.arrProtocolData;
    const poolData = backendResponse.data.PoolData;
    const properChainName = chain.charAt(0).toUpperCase() + chain.slice(1);
    const filteredProtocols = protocolData.filter((protocol) =>
      protocol.chains.includes(properChainName)
    );

    const responseData = [];

    for (let i = 0; i < filteredProtocols.length; i++) {
      if (filteredProtocols[i].poolLength > 0) {
        filteredProtocols[i].pool = poolData[filteredProtocols[i].poolindex];
      }
      responseData.push(filteredProtocols[i]);
    }

    const chartData = await TVLChart(responseData);

    responseData.push(chartData);

    return NextResponse.json(responseData); 
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ error: error.message }); 
  }
};
