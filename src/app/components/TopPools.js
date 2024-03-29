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
                    {APR.slice(0, 3).map((item, index) => (
        <tr key={index}>
          <td>{index + 1}.</td>
          <td>{item.symbol.substring(0, 12).replace(/-/g, " / ")}</td>
          <td className="tdapy">
          <span className={
              item.apy1D < 0 ?"redText" : "greenText"
            }>
            {item.apy1D > 0 ? "+" : ""}
            {item.apy1D.toFixed(4)}
          </span>
          {" "}/{" "}
          <span className={
              item.apy7D !== null && item.apy7D < 0 ?"redText" : "greenText"
            }>
            {item?.apy7D?.toFixed(4) !== null
              ? item?.apy7D?.toFixed(4) > 0
                ? "+" + item?.apy7D?.toFixed(4)
                : item?.apy7D?.toFixed(4)
              : "-"}
          </span>
          </td>
       
        </tr>
      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="marketsize">
              <div className="headers">
                <div className="heading">
                  Top Losers
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
                    {L_APR.slice(0, 3).map((item, index) => (
        <tr key={index}>
          
          <td>{index + 1}.{" "}</td>
          <td>  {" "}{item.symbol.substring(0, 12).replace(/-/g, " / ")}</td>
          <td className="tdapy">
          <span className={
              item.apy1D.toFixed(4) < 0 ? "redText" : "greenText"
            }>
            {item.apy1D.toFixed(4) > 0 ? "+" : ""}
            {item.apy1D.toFixed(4)}
          </span>
          {" "}/{" "}
          <span className={
              item.apy7D !== null && item.apy7D.toFixed(4) < 0 ? "redText" : "greenText"
            }>
            {item?.apy7D?.toFixed(4) !== null
              ? item?.apy7D?.toFixed(4) > 0
                ? "+" + item?.apy7D?.toFixed(4)
                : item?.apy7D?.toFixed(4)
              : "-"}
          </span>
          </td>
          
        </tr>
      ))}
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
