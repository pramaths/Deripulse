const axios = require("axios");

const TVLChart = async () => {
  const res = await axios.get(`/api/db/`);
  const prot = res.data.arrProtocolData;

  const timestampCount = {};
  //const threshold = prot.length * 0.25;
  for (const protocol of prot) {
    const chartData = protocol.chartTVL;
    for (const entry of chartData) {
      const date = entry.date;

      if (date !== null && date !== undefined) {
        if (!(date in timestampCount)) {
          timestampCount[date] = 1;
        } else {
          timestampCount[date]++;
        }
      }
    }
  }

  let aggregated_data = {};
  //console.log(timestampCount)
  for (const protocol of prot) {
    const chartData = protocol.chartTVL;
    for (const entry of chartData) {
      const date = entry.date;
      const tvl = entry.totalLiquidityUSD;

      if (date !== null && date !== undefined && timestampCount[date] >= 10) {
        if (date >= 1681430400) {
          if (timestampCount[date] >= 100) {
            if (!(date in aggregated_data)) {
              aggregated_data[date] = tvl;
            } else {
              aggregated_data[date] += tvl;
            }
            continue;
          }
          continue;
        }
        if (!(date in aggregated_data)) {
          aggregated_data[date] = tvl;
        } else {
          aggregated_data[date] += tvl;
        }
      }
    }
  }

  //console.log(aggregated_data);

  const sortedKeys = Object.keys(aggregated_data).sort((a, b) => a - b);

  const sortedData = {};
  for (const key of sortedKeys) {
    sortedData[key] = aggregated_data[key];
  }

  const data = Object.entries(sortedData).map(([timestamp, value]) => ({
    timestamp: parseFloat(timestamp),
    value: parseFloat(value),
  }));
  return data;
};

const res = await TVLChart();
export default { res };
