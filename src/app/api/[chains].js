import axios from "axios";
import TVLChart from "./chartNetTVL";

export default async (req, res) => {
  const chain = req.query.chains;
  try {
    const backendResponse = await axios.get("http://localhost:8000/api/db");
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

    res.status(200).json(responseData); 
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message }); 
  }
};
