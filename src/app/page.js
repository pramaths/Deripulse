"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import "./home.css";
import rank from "../assests/rank.svg";
import dydx from "../assests/dydx.svg";
import fxdx from "../assests/fxdx.svg";
import search from "../assests/search.svg";
import candle from "../assests/candle.svg";
import order from "../assests/order.svg";
import react, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, AreaChart, Area } from "recharts";
import algorand from "../assests/algorand.svg";
import aptos from "../assests/aptos.svg";
import base from "../assests/base.svg";
import avalanche from "../assests/avalanche.svg";
import bitcoincash from "../assests/aptos.svg";
import boba from "../assests/boba.svg";
import celo from "../assests/celo.svg";
import cronos from "../assests/cronos.svg";
import fantom from "../assests/fantom.svg";
import aurora from "../assests/aurora.svg";
import ethereum from "../assests/ethereum.svg";
import arbitrum from "../assests/arbitrum.svg";
import solana from "../assests/solana.svg";
import sui from "../assests/sui.svg";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const chainSVGs = {
  Ethereum: (
    <Image
      src={ethereum}
      height={22}
      width={22}
      alt="Ethereum"
      title="Ethereum"
    />
  ),
  Arbitrum: (
    <Image
      src={arbitrum}
      height={22}
      width={22}
      alt="Arbitrum"
      title="Arbitrum"
    />
  ),
  Avalanche: (
    <Image
      src={avalanche}
      height={22}
      width={22}
      alt="Avalanche"
      title="Avalanche"
    />
  ),
  Algorand: (
    <Image
      src={algorand}
      height={22}
      width={22}
      alt="Algorand"
      title="Algorand"
    />
  ),
  Aptos: <Image src={aptos} height={22} width={22} alt="Aptos" title="Aptos" />,
  Base: <Image src={base} height={22} width={22} alt="Base" title="Base" />,
  Bitcoincash: (
    <Image
      src={bitcoincash}
      height={22}
      width={22}
      alt="Bitcoincash"
      title="Bitcoincash"
    />
  ),
  Boba: <Image src={boba} height={22} width={22} alt="Boba" title="Boba" />,
  Celo: <Image src={celo} height={22} width={22} alt="Celo" title="Celo" />,
  Cronos: (
    <Image src={cronos} height={22} width={22} alt="Cronos" title="Cronos" />
  ),
  Fantom: (
    <Image src={fantom} height={22} width={22} alt="Fantom" title="Fantom" />
  ),
  Aurora: (
    <Image src={aurora} height={22} width={22} alt="Aurora" title="Aurora" />
  ),
  Solana: (
    <Image src={solana} height={22} width={22} alt="Solana" title="Solana" />
  ),
  Sui: <Image src={sui} height={22} width={22} alt="Sui" title="Sui" />,
};
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#d6455d"];
export default function Home() {
  const [data, setdata] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [areachart, setAreachart] = useState([]);
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
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(data);
  const [chartData, setChartData] = useState([]);
  const [lineData, setlineData] = useState([]);useEffect(() => {
    const lineChartData = [];
  
    for (const protocol of data) {
      const chart = protocol.chartTVL;
  
      for (const entry of chart) {
        const timestamp = entry.date; 
        const tvl = entry.totalLiquidityUSD;
  
        if (timestamp !== null && timestamp !== undefined) {
          const date = new Date(timestamp * 1000); 
          const year = date.getFullYear();
          if (year >= 2023) {
            const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${year}`;
  
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
    lineChartData.sort((a, b) => new Date(b.name) - new Date(a.name));
  
    setlineData(lineChartData);
  }, [data]);
  console.log("line", lineData);
  useEffect(() => {
    const sortedData = [...data].sort((a, b) => b.mcap - a.mcap);
    const totalMarketCapOthers = sortedData
      .slice(4)
      .reduce((total, dex) => total + dex.mcap, 0);
    const pieData = [
      ...sortedData.slice(0, 4),
      {
        protocolname: "Others",
        mcap: totalMarketCapOthers,
      },
    ];

    setPieChartData(pieData);
  }, [data]);
  useEffect(() => {
    const dataWithFirst30Days = data.map((protocol) => ({
      ...protocol,
      chartTVL: protocol.chartTVL.slice(0, 30),
    }));
    setAreachart(dataWithFirst30Days);
  }, [data]);
  const format = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K`;
    } else {
      return value;
    }
  };
  console.log("lol", chartData);
  return (
    <div>
      <Navbar />
      <div className="layout">
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
                <div className="text-wrapper-8">$390,821,262</div>
                <Image className="icon" alt="Icon" src={dydx} />
              </div>
              <div className="data">
                <div className="doughnut">
                  <PieChart width={180} height={185}>
                    <Pie
                      data={pieChartData}
                      dataKey="mcap"
                      // cx={80}
                      // cy={50}
                      innerRadius={55}
                      outerRadius={90}
                      fill="#82ca9d"
                      isAnimationActive={true}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
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
                    <Image src={candle} alt="cnadle" />
                  </div>
                </div>
              </div>
              <div className="minih">
                <div className="tvlprice">$37.903billion</div>
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
                  <LineChart
                    width={500}
                    height={300}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="tvl"
                      data={lineData}
                      stroke="blue"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="div">
          <div className="tableheader">
            <div className="tmainhead">Crypto Derivatives</div>
            <div className="searchbar">
              <div className="search">
                <Image src={search} alt="search" />
                <input placeholder="Search (eg. dydx, Gmx)" />{" "}
              </div>
            </div>
          </div>

          <div className="datatable">
            <div className="tables">
              <div className="table">
                <div className="thead-rank">#</div>
                <div className="thead-name">Name</div>
                <div className="thead-tvl">TVL</div>
                <div className="thead-protocol">Protocol</div>
                <div className="thead-marketcap">Market Cap</div>
                <div className="thead-7dchange">7d Change</div>
                <div className="thead-pools">Efficiency</div>
                <div className="thead-last30">Last 30d</div>
              </div>
            </div>
            {areachart.map((item, index) => (
              <div className="tablecells">
                <div className="tablecell" key={index}>
                  <div className="tablecell-rank">{index + 1}</div>
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
                  <div className="tablecell-tvl">$ {format(item.tvl)}</div>
                  <div className="tablecell-protocol" key={index}>
                    {item.chains.map((chain, chainIndex) => (
                      <div key={chainIndex} className="tool-tip">
                        {chainSVGs[chain]}
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
                  <div className="tablecell-pool">
                    {item.volume24h && item.tvl
                      ? `${(item.volume24h / item.tvl).toFixed(2)}`
                      : "N/A"}
                  </div>
                  <div className="tablecell-last30d" key={index}>
                    <AreaChart width={150} height={60} data={item.chartTVL}>
                      <defs>
                        <linearGradient
                          id={`gradientFill${index}`}
                          x1="0"
                          y1="1"
                          x2="0"
                          y2="0"
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
