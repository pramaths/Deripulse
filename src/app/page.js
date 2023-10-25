"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./styles/home.css";
import rank from "../assests/rank.svg";
import search from "../assests/search.svg";
import candle from "../assests/candle.svg";
import order from "../assests/order.svg";
import Dough from "./components/Doughnut"
import react, { useEffect, useState } from "react";

import {
  XAxis,
  YAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
function getChainSVGUrl(chainName) {
  return `/chains/${chainName.toLowerCase()}.svg`;
}
const COLORS = ["#F8E837", "green", "#0076FF", "#FF8042", "#FFFFFF4D"];
export default function Home() {
  const [data, setdata] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [areachart, setAreachart] = useState([]);
  const[tvl,settvl]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("/api/db")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setdata(data.arrProtocolData);
        settvl(data.sumTVL)
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const [lineData, setlineData] = useState([]);
  useEffect(() => {
    const lineChartData = [];

    for (const protocol of data) {
      const chart = protocol.chartTVL;

      for (const entry of chart) {
        const timestamp = entry.date;
        const tvl = entry.totalLiquidityUSD / 1000000000;

        if (timestamp !== null && timestamp !== undefined) {
          const date = new Date(timestamp * 1000);
          const year = date.getFullYear();
          const month = date.getMonth();
          if (year >= 2021 && year < 2023) {
            if (month > 1) {
              const formattedDate = `${date.getDate()}-${
                date.getMonth() + 1
              }-${year}`;

              const existingEntry = lineChartData.find(
                (item) => item.name === formattedDate
              );

              if (existingEntry) {
                existingEntry.tvl += tvl;
              } else {
                lineChartData.push({ name: formattedDate, tvl });
              }
            }
          }
        }
      }
    }
    lineChartData.sort((a, b) => new Date(b.name) - new Date(a.name));
    setlineData(lineChartData);
  }, [data]);
  useEffect(() => {
    const sortedData = [...data].sort((a, b) => b.tvl - a.tvl);
    const totalMarketCapOthers = sortedData
      .slice(4)
      .reduce((total, dex) => total + dex.tvl, 0);
    const pieData = [
      ...data.slice(0, 4),
      {
        protocolname: "Others",
        tvl: totalMarketCapOthers,
      },
    ];
    setPieChartData(pieData);
  }, [data]);
  useEffect(() => {
    const dataWithFirst30Days = data.map((protocol) => ({
      ...protocol,
      chartTVL: protocol.chartTVL.slice(-30),
    }));
    setAreachart(dataWithFirst30Days);
  }, [data]);
   const filteredData = data.filter((protocol) => 
    protocol.protocolname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const format = (value) => {

    if(value>1000000000){
      return `${(value/1000000000).toFixed(2)}B`
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } 
    if (typeof value === 'number' && value <= 1000) {
      return `${value.toFixed(2)}`;
  }
    else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K`;
    } 
    else {
      return value;
    }
  };
console.log("piechartdata",pieChartData)
console.log(tvl)
  return (
    <div>
      <Navbar />
      <div className="layout">
        <div className="home-contianer">
          <div className="box">
            <div className="group">
              <div className="marketsize">
                <div className="headers">
                  <div className="heading">Market size</div>
                  <div className="pagination">
                    <div className="panigation">
                      <div className="text-wrapper-6">1h</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">1d</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">1w</div>
                    </div>
                  </div>
                </div>
                <div className="ranking">
  <Image className="group-2" alt="Group" src={rank} />
  <div className="text-wrapper-8">${data.length > 0 ? format(data[0].tvl) : ''}</div>
  <Image className="icon" alt="Icon" src={data.length > 0 ? data[0].logo : ''}
  width={22}
  height={22} />
</div>
                <div className="data">
                  <div className="doughnut">
                  <Dough pieChartData={pieChartData} />
                  </div>
                  <div className="exchanges">
                    {data
                      ? data.slice(0, 4).map((name, index) => (
                          <div key={index} className="text-wrapper">
                            <Image
                              className="mark"
                              alt="Mark"
                              src={name.logo}
                              width={15}
                              height={15}
                            />
                            {name.protocolname}
                          </div>
                        ))
                      : null}
                    <div className="text-wrapper">Others</div>
                  </div>
                </div>
              </div>
              <div className="chartcontainer">
                <div className="heading">
                  Total value Locked
                  <div className="rightheading">
                    <div className="all">
                      All
                      <Image src={order} alt="asc" />
                    </div>
                    <div className="candle">
                      <Image src={candle} alt="candle" />
                    </div>
                  </div>
                </div>
                <div className="minih">
                  <div className="tvlprice">${format(tvl)}</div>
                  <div className="pagination">
                    <div className="panigation">
                      <div className="text-wrapper-6">1d</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">1w</div>
                    </div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-7">1M</div>
                    </div>
                  </div>
                </div>
                <div className="linechart">
                <ResponsiveContainer width="100%" height={200}>
  <AreaChart
    width={500}
    height={300}
    margin={{
      top: 5,
      right: 1,
      left: -15,
      bottom: 5,
    }}
  >
    <defs>
      <linearGradient
        id="chartGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop offset="5%" stopColor="red" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#d6455d" stopOpacity={0.8} />
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <Area
      type="monotone"
      dataKey="tvl"
      data={lineData}
      stroke="red"
      fill="url(#chartGradient)"
      strokeWidth={0.9}
      dot={false}
    />
  </AreaChart>
</ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="tableheader">
            <div className="tmainhead">Crypto Derivatives</div>
            <div className="searchbar">
              <div className="search">
                <Image src={search} alt="search" />
                <input 
            placeholder="Search (eg. dydx, Gmx)"
            value={searchTerm}
            onChange={handleSearchChange} 
          />
              </div>
            </div>
          </div>
          <div className="div">
            <div className="datatable">
              <div className="tables">
                <div className="table">
                  <div className="thead-rank">#</div>
                  <div className="thead-name">Name</div>
                  <div className="thead-tvl">TVL</div>
                  <div className="thead-protocol">Protocol</div>
                  <div className="thead-marketcap">Market Cap</div>
                  <div className="thead-7dchange">7d Change</div>
                  <div className="thead-24hrvolume">24hr Volume</div>
                  <div className="thead-pools">Efficiency</div>
                  <div className="thead-last30">Last 30d</div>
                </div>
              </div>
              {filteredData.map((item, index) => (
                <div className="tablecells">
                  <div className="tablecell" key={index.id}>
                    <div className="tablecell-rank">{item.rank}</div>
                    <div className="tablecell-name">
                      <div className="nameimg">
                        <Image
                          src={item.logo}
                          alt={item.protocolname}
                          width={22}
                          height={22}
                          margin={1}
                        />
                      </div>
                      <div> {item.protocolname}</div>
                    </div>
                    <div className="tablecell-tvl">${format(item.tvl)}</div>
                    <div className="tablecell-protocol" key={index.id}>
                      {item.chains.map((chain, chainIndex) => (
                        <div key={chainIndex} className="tool-tip">
                          <Image
                            src={getChainSVGUrl(chain)}
                            alt={chain}
                            height={22}
                            width={22}
                            title={chain}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="tablecell-marketcap">
                      {item.mcap ? format(item.mcap) : "N/A"}
                    </div>
                    <div
                      className="tablecell-7dchange"
                      style={{
                        color: item.change_7d < 0 ? "red" : "green",
                      }}
                    >
                      {item.change_7d !== null && item.change_7d !== undefined
                        ? `${item.change_7d.toFixed(2)}%`
                        : "N/A"}
                    </div>
                    <div className="tablecell-24hrvolume"
                   >
                    {item.volume24h !== null && item.volume24h !== undefined
                        ? `${format(item.volume24h.toFixed(2))}`
                        : "N/A"}
                    </div>
                    <div className="tablecell-pool">
                      {item.volume24h && item.tvl
                        ? `${(item.volume24h / item.tvl).toFixed(2)}`
                        : "N/A"}
                    </div>
                    <div className="tablecell-last30d">
                     <ResponsiveContainer width="100%" height="100%">
                      <AreaChart  height={60} data={item.chartTVL}>
                        <defs>
                          <linearGradient
                            id={`gradientFill${index}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1.3"
                          >
                            <stop
                              offset="5%"
                              stopColor={
                                item.chartTVL &&
                                item.chartTVL.length >= 30 &&
                                item.chartTVL[0].totalLiquidityUSD <
                                  item.chartTVL[29].totalLiquidityUSD
                                  ? "#00ff00"
                                  : "#ff0000"
                              }
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor={
                                item.chartTVL &&
                                item.chartTVL.length >= 30 &&
                                item.chartTVL[0].totalLiquidityUSD <
                                  item.chartTVL[29].totalLiquidityUSD
                                  ? "#4fc280"
                                  : "#d6455d"
                              }
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="totalLiquidityUSD"
                          stroke={
                            item.chartTVL &&
                            item.chartTVL.length >= 30 &&
                            item.chartTVL[0].totalLiquidityUSD <
                              item.chartTVL[29].totalLiquidityUSD
                              ? "#4fc280"
                              : "#d6455d"
                          }
                          fill={`url(#gradientFill${index})`}
                          fillOpacity={0.8}
                        />
                      </AreaChart>
                   </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
