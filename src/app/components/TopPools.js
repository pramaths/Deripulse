
//           <div className={styles.topGainers}>
//             <div className={styles.tooltip}>
//               <Image data-tooltip-id="topGainers" src={info} />
//               <ReactTooltip
//                 id="topGainers"
//                 place="bottom"
//                 content="Top 3 Gainers in terms of APR"
//               />
//             </div>
//             <div className={styles.Heading}>
//               <span>Top Gainers</span>
//               <div className={styles.star}>
//                 <Image src={star} alt="X" />
//               </div>
//             </div>
//             <Image src={graphup} />

//             <div className={styles.list}>
//               <span>
//                 1. {APR[0].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   APR[0].apy1D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[0].apy1D.toFixed(4) > 0 ? "+" : ""}
//                 {APR[0].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   APR[0].apy7D < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[0].apy7D > 0 ? "+" : ""}
//                 {APR[0].apy7D}
//               </div>
//             </div>
//             <div className={styles.list2}>
//               <span>
//                 2. {APR[1].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   APR[1].apy1D< 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[1].apy1D> 0 ? "+" : ""}
//                 {APR[1].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   APR[1].apy7D< 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[1].apy7D> 0 ? "+" : ""}
//                 {APR[1].apy7D}
//               </div>
//             </div>
//             <div className={styles.list3}>
//               <span>
//                 3. {APR[2].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   APR[2].apy1D< 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[2].apy1D> 0 ? "+" : ""}
//                 {APR[2].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   APR[2].apy7D !== null && APR[2].apy7D< 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {APR[2]?.apy7D?.toFixed(4) !== null
//                   ? APR[2]?.apy7D?.toFixed(4) > 0
//                     ? "+" + APR[2]?.apy7D?.toFixed(4)
//                     : "-"
//                   : "-"}
//               </div>
//             </div>
//           </div>
//           <div className={styles.topLosers}>
//             <div className={styles.Heading}>
//               <div className={styles.tooltip2}>
//                 <Image data-tooltip-id="topLosers" src={info} />
//                 <ReactTooltip
//                   id="topLosers"
//                   place="bottom"
//                   content="Top 3 Losers in terms of APR"
//                 />
//               </div>
//               <span id="TG">Top Losers</span>
//               <div className={styles.star}>
//                 <Image src={loss} alt="X" />
//               </div>
//             </div>
//             <Image src={graphdown} alt="X" />
//             <div className={styles.list}>
//               <span>
//                 1. {L_APR[0].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   L_APR[0].apy1D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[0].apy1D.toFixed(4) > 0 ? "+" : ""}
//                 {L_APR[0].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   L_APR[0].apy7D !== null && L_APR[1].apy7D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[0].apy7D === null || L_APR[0].apy7D === 0
//                   ? ""
//                   : L_APR[0].apy7D.toFixed(4)}
//               </div>
//             </div>
//             <div className={styles.list2}>
//               <span>
//                 2. {L_APR[1].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   L_APR[1].apy1D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[1].apy1D.toFixed(4) > 0 ? "+" : ""}
//                 {L_APR[1].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   L_APR[1].apy7D !== null && L_APR[1].apy7D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[1].apy7D === null || L_APR[1].apy7D === 0
//                   ? ""
//                   : L_APR[1].apy7D.toFixed(4)}
//               </div>
//             </div>
//             <div className={styles.list3}>
//               <span>
//                 3. {L_APR[2].symbol.substring(0, 12).replace(/-/g, " / ")}
//               </span>
//               <div
//                 className={`${styles.changeAPR1D} ${
//                   L_APR[2].apy1D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[2].apy1D.toFixed(4) > 0 ? "+" : ""}
//                 {L_APR[2].apy1D.toFixed(4)}
//               </div>
//               <div className={styles.slash}> /</div>
//               <div
//                 className={`${styles.changeAPR7D} ${
//                   L_APR[2].apy7D !== null && L_APR[2].apy7D.toFixed(4) < 0
//                     ? styles.redText
//                     : styles.greenText
//                 }`}
//               >
//                 {L_APR[2].apy7D === null
//                   ? "-"
//                   : L_APR[2].apy7D.toFixed(4) > 0
//                   ? "+"
//                   : "-"}
//                 {L_APR[2].apy7D === null
//                   ? ""
//                   : Math.abs(L_APR[2].apy7D.toFixed(4))}
//               </div>
//             </div>
//           </div>

//           <div className={styles.prediction}>
//             <div className={styles.semiHeading}>
//               AVG APY - {avgAPR.toFixed(4)}%
//             </div>
//           </div>

//         </div>
//         <div className={styles.part2}>
//           <div className={styles.topPools}>Top Pools</div>
//           <div className={styles.bar}>
//             <table className={styles.textbar}>
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Pool Name</th>
//                   <th>Price</th>
//                   <th>Name</th>
//                   <th>Chain</th>
//                   <th>APY%</th>
//                   <th>Last 30d</th>
//                   <th>Last 7d</th>
//                 </tr>
//               </thead>
//               <tbody className={styles.tablecells}>
//                 {TAPR.map((pool, index) => (
//                   <tr key={index}>
//                     <td className={styles.tmargin}>{index + 1}</td>
//                     <td className={styles.tmargin}>
//                       <div>{TAPR[index].symbol.replace(/-/g, " / ")}</div>
//                     </td>

//                     <td className={styles.tmargin}>
//                       ${TAPR[index].tvlUSD.toLocaleString()}
//                     </td>
//                     <td className={styles.tmargin}>
//                       <div className={styles.fix}>
//                         <img
//                           className={styles.logoContainer}
//                           src={TAPR[index].logo}
//                           alt={TAPR[index].symbol}
//                         />

//                         <p>{TAPR[index].slug.toUpperCase()}</p>
//                       </div>
//                     </td>
//                     <td className={styles.tmargin}>
//                       <p>{TAPR[index].chain}</p>
//                     </td>

//                     <td className={styles.tmargin}>
//                       {TAPR[index].apy.toFixed(2)}%
//                     </td>
//                     <td
//                       className={`${styles.tmargin} ${
//                         TAPR[index].apy30D !== null && TAPR[index].apy30D < 0
//                           ? styles.redText
//                           : styles.greenText
//                       }`}
//                     >
//                       {TAPR[index].apy30D !== null
//                         ? TAPR[index].apy30D.toFixed(2) + "%"
//                         : "-"}
//                     </td>
//                     <td
//                       className={`${styles.tmargin} ${
//                         TAPR[index].apy7D !== null && TAPR[index].apy7D < 0
//                           ? styles.redText
//                           : styles.greenText
//                       }`}
//                     >
//                       {TAPR[index].apy7D !== null
//                         ? TAPR[index].apy7D.toFixed(2) + "%"
//                         : "-"}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }
// };

// export default TopPools;
"use client";
import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Image from "next/image";
import { Tooltip as ReactTooltip } from "react-tooltip";
import order from "../../assests/order.svg";
import candle from "../../assests/candle.svg";
import star from "../../assests/star.svg";
import loss from "../../assests/loss.svg";
import graphdown from "../../assests/graphdown.svg";
import graphup from "../../assests/graphup.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import search from "../../assests/search.svg";
import info from "../../assests/info.svg";
import "../styles/toppools.css";
const lineData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function getChainSVGUrl(chainName) {
  return `/chains/${chainName.toLowerCase()}.svg`;
}
const TopChains = () => {
  const [chainsData, setChainsData] = useState([]);
  const [tabledata, settabledata] = useState([]);
  const [TAPR, setTAPR] = useState([]);
  const [APR, setAPR] = useState([]);
  const [L_APR, setL_APR] = useState([]);
  const [avgAPR, setavgAPR] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function tvlbased(res) {
      return res.sort((a, b) => b.tvlUSD - a.tvlUSD);
    }
    async function aprAvg(res) {
      var sum = 0;
      var totalTVL = 0;
      var norm;
      for (const pool of res) {
        norm = pool.apy * pool.tvlUSD;
        sum += norm;
        totalTVL += pool.tvlUSD;
      }
      const resp = sum / totalTVL;
      return resp;
    }

    async function fetchAPR() {
      try {
        const res = await axios.get("https://www.deripulse.com/api/apr");
        //console.log(res.data.slice(0, 3));

        setAPR(res.data.slice(0, 3));
        setL_APR(res.data.slice(-3));
        const tvl = await tvlbased(res.data);
        setTAPR(tvl);
        const resp = await aprAvg(res.data);
        setavgAPR(resp);
        console.log(avgAPR);
      } catch (error) {
        console.error("Error fetching APR:", error);
      }
    }

    fetchAPR();
  }, []);

  useEffect(() => {
    fetch("https://www.deripulse.com/api/allChains")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw API Response:", data);

        const aggregatedData = {};

        for (const chain in data) {
          let totalChainTvl = 0;
          let totalVolume24h = 0;
          let totalChange7d = 0;
          let totalChange1d = 0;
          let protocolsArray = []; 

          data[chain].forEach((protocol) => {
            if (protocol.chainTvls && protocol.chainTvls[chain]) {
              totalChainTvl += protocol.chainTvls[chain];
            }
            if (protocol.volume24h) {
              totalVolume24h += protocol.volume24h;
            }
            if (protocol.change_7d) {
              totalChange7d += protocol.change_7d;
            }
            if (protocol.change_1d) {
              totalChange1d += protocol.change_1d;
            }
            protocolsArray.push(protocol.protocolname);
          });

          const numOfProtocols = protocolsArray.length;
          aggregatedData[chain] = {
            chainName: chain,
            totalChainTvl,
            avgVolume24h: totalVolume24h / numOfProtocols,
            avgChange7d: totalChange7d / numOfProtocols,
            avgChange1d: totalChange1d / numOfProtocols,
            protocols: protocolsArray,
            numOfProtocols,
          };
        }

        const sortedData = Object.values(aggregatedData)
          .sort((a, b) => b.totalChainTvl - a.totalChainTvl)
          .map((chain, index) => ({
            rank: index + 1,
            ...chain,
          }));

        setChainsData(data);
        settabledata(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const format = (value) => {
    if (value > 1000000000) {
      return `${(value / 1000000000).toFixed(2)}B`;
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    }
    if (typeof value === "number" && value <= 1000) {
      return `${value.toFixed(2)}`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K`;
    } else {
      return value;
    }
  };
  console.log("hello", tabledata);
  return (
    <div className="layout">
      <div className="topchain-container">
        <div className="box">
          <div className="group">
            <div className="marketsize">
              <div className="headers">
                <div className="heading">
                  Top Gainers
                  <Image className="group-2" alt="Group" src={star} />
                </div>
                <div className="pagination">
                  <Image data-tooltip-id="topGainers" src={info} />
                  <ReactTooltip
                    id="topGainers"
                    place="bottom"
                    content="Top 3 Gainers in terms of APR"
                  />
                </div>
              </div>

              <div className="data">
                <div>
                  <table className="table1">
                    <tbody>
                      {tabledata.slice(0, 3).map((chain, index) => {
                        return (
                          <tr key={index}>
                            <td>{chain.rank}.</td>
                            <td className="chaincell">
                              {chain.chainName}
                            </td>
                            <td>$ {chain.avgVolume24h.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="marketsize">
              <div className="headers">
                <div className="heading">
                  Top Chains
                  <Image className="group-2" alt="Group" src={star} />
                </div>
                <div className="pagination">
                  <Image data-tooltip-id="topGainers" src={info} />
                  <ReactTooltip
                    id="topGainers"
                    place="bottom"
                    content="Top 3 Gainers in terms of APR"
                  />
                </div>
              </div>

              <div className="data">
                <div>
                  <table className="table1">
                    <tbody>
                      {tabledata.slice(0, 3).map((chain, index) => {
                        return (
                          <tr key={index}>
                            <td>{chain.rank}.</td>
                            <td className="chaincell">
                              {chain.chainName}
                            </td>
                            <td>$ {chain.avgVolume24h.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="marketsize">
              <div className="headers">
                <div className="heading">
                  Top Chains Trend
                  <Image className="group-2" alt="Group" src={star} />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={lineData}>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="tableheader">
          <div className="tmainhead">Top Chains</div>
          <div className="searchbar">
            <div className="search">
              <Image src={search} alt="search" />
              <input placeholder="Search (eg. dydx, Gmx)" />
            </div>
          </div>
        </div>
        <div className="topchainstable">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Pool Name</th>
                <th>Price</th>
                <th>Name</th>
                <th>Chain</th>
                <th>APY%</th>
                <th>Last 30d</th>
                <th>Last 7d</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(TAPR) &&
                TAPR.map((pool, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="poolname">
                      <span>{TAPR[index].symbol.replace(/-/g, " / ")}</span>
                      <ReactTooltip />
                    </td>
                    <td>
                      <span> ${TAPR[index].tvlUSD.toLocaleString()}</span>
                      <ReactTooltip />
                    </td>
                    <td className="chainss">
                      <Image
                        src={TAPR[index].logo}
                        alt={TAPR[index].symbol}
                        height={30}
                        width={30}
                      />
                      <p>{TAPR[index].slug.toUpperCase()}</p>
                    </td>

                    <td>
                      <p>{TAPR[index].chain}</p>
                    </td>
                    <td> {TAPR[index].apy.toFixed(2)}%</td>
                    <td>
                      {TAPR[index].apy30D !== null
                        ? (
                          <span className={TAPR[index].apy30D>0?'greenText':'redText'}>
                        {  TAPR[index].apy30D.toFixed(2) + "%"}
                          </span>
                       ) : "-"}
                    </td>
                    <td>
    {TAPR[index].apy7D !== null ? (
        <span className={TAPR[index].apy7D > 0 ? 'greenText' : 'redText'}>
            {TAPR[index].apy7D.toFixed(2) + "%"}
        </span>
    ) : "-"}
</td>

                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TopChains;
