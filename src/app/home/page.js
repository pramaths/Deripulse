
'use client'
import Link from "next/link";
import Image from "next/image";
// import { useClient } from 'next/server'
import Navbar from "../components/Navbar";
import "./home.css";
import rank from "../../assests/rank.svg";
import dydx from "../../assests/dydx.svg";
import fxdx from "../../assests/fxdx.svg";
import search from "../../assests/search.svg";
import candle from "../../assests/candle.svg"
import order from "../../assests/order.svg"
import react,{useEffect,useState} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  export default function Home() {
const [data,setdata]= useState([]);
useEffect(()=>{
  fetch("/api/db")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    // Use flatMap to create separate elements for each chain
    const transformedData = data.arrProtocolData.flatMap((item) =>
      item.chains.map((chain) => ({
        ...item,
        chain, // Add chain as a separate property
      }))
    );
    setdata(transformedData);
  })
  .catch((error) => console.error("Error:", error));
}, []);
  return (
    <div>
      <Navbar />

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
              <LineChart
  width={200}
  height={180}
  data={chart}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
              </div>
              <div className="exchanges">
                <div className="text-wrapper">
                  DYDX
                  <Image className="mark" alt="Mark" src={dydx} />
                </div>
                <div className="text-wrapper">
                  GMX
                  <Image className="mark" alt="Mark" src={fxdx} />
                </div>
                <div className="text-wrapper">
                  FXDX
                  <Image className="mark" alt="Mark" src={fxdx} />
                </div>
                <div className="text-wrapper">
                  Oseidon
                  <Image className="mark" alt="Mark" src={fxdx} />
                </div>
                <div className="text-wrapper">Others</div>
              </div>
            </div>
          </div>
          <div className="chartcontainer">
            <div className="heading">Total value Locked
            <div className="rightheading">
              <div className="all">All
              <Image src={order}/>
              </div>
              <div className="candle">
                <Image src={candle}/>
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
              <LineChart
      width={800}
      height={260}
      data={chart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
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
              <div className="thead-pools">Pools</div>
              <div className="thead-last30">Last 30d</div>
            </div>
          </div>
          {data.map((item, index) => (
          <div className="tablecells">
        
            <div className="tablecell" key={index}>
              <div className="tablecell-rank">{index + 1}</div>
              <div className="tablecell-name">
                {/* <Image src={item.logo} alt={item.protocolname} width={50} height={50}/> */}
                {item.protocolname}
              </div>
              <div className="tablecell-tvl">${item.tvl.toFixed(2)}</div>
              <div className="tablecell-marketcap">
                {item.mcap ? `$${item.mcap.toFixed(2)}` : "N/A"}
              </div>
              <div className="tablecell-protocol">
                {item.chains.join(", ")}
              </div>
              <div className="tablecell-7dchange">
  {item.change_7d !== null && item.change_7d !== undefined
    ? `${item.change_7d.toFixed(2)}%`
    : "N/A"}
</div>
              <div className="tablecell-pool">{item.poolLength}</div>
              <div className="tablecell-last30d">
                {/* <Image src={item.logo} alt={item.protocolname} width={20} height={20}/> */}
              </div>
            </div>
        
       
</div>
         ))} </div>
      </div>
    </div>
  );
}
