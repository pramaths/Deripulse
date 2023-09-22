const axios = require("axios");

const APR = async () => {
  const res = await axios.get("https://deripulse.com/api/db/");
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

  console.log(APR);
};

APR();
