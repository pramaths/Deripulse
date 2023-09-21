
const TVLChart = async (responseData) => {
  const prot = responseData;

  const timestampCount = {};
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
  for (const protocol of prot) {
    const chartData = protocol.chartTVL;
    for (const entry of chartData) {
      const date = entry.date;
      const tvl = entry.totalLiquidityUSD;

      if (date !== null && date !== undefined && timestampCount[date] >= 10) {
        if (!(date in aggregated_data)) {
          aggregated_data[date] = tvl;
        } else {
          aggregated_data[date] += tvl;
        }
      }
    }
  }


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
export default  TVLChart ;
