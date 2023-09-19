// "use client";
// import Link from "next/link";
// import Image from "next/image";
// // import { useClient } from 'next/server'
// import Navbar from "../components/Navbar";
// import "./home.css";
// import rank from "../../assests/rank.svg";
// import dydx from "../../assests/dydx.svg";
// import fxdx from "../../assests/fxdx.svg";
// import search from "../../assests/search.svg";
// import candle from "../../assests/candle.svg";
// import order from "../../assests/order.svg";
// import react, { useEffect, useState } from "react";
// import { PieChart, Pie, Sector, Cell,AreaChart, Area} from 'recharts';
// import algorand from "../../assests/algorand.svg";
// import aptos from "../../assests/aptos.svg";
// import base from "../../assests/base.svg";
// import avalanche from "../../assests/avalanche.svg";
// import bitcoincash from "../../assests/aptos.svg";
// import boba from "../../assests/boba.svg";
// import celo from "../../assests/celo.svg";
// import cronos from "../../assests/cronos.svg";
// import fantom from "../../assests/fantom.svg";
// import aurora from "../../assests/aurora.svg";
// import ethereum from "../../assests/ethereum.svg";
// import arbitrum from "../../assests/arbitrum.svg";
// import solana from "../../assests/solana.svg";
// import sui from "../../assests/sui.svg";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// const chainSVGs = {
//   Ethereum: <Image src={ethereum}  height={20} width={20}  alt="Ethereum" />,
//   Arbitrum: <Image src={arbitrum}  height={20} width={20}  alt="Arbitrum" />,
//   Avalanche: <Image src={avalanche}  height={20} width={20}  alt="Avalanche" />,
//   Algorand: <Image src={algorand}  height={20} width={20}  alt="Algorand" />,
//   Aptos: <Image src={aptos}  height={20} width={20}  alt="Aptos" />,
//   Base: <Image src={base}  height={20} width={20}  alt="Base" />,
//   Bitcoincash: <Image src={bitcoincash}  height={20} width={20}  alt="Bitcoincash" />,
//   Boba: <Image src={boba}  height={20} width={20}  alt="Boba" />,
//   Celo: <Image src={celo}  height={20} width={20}  alt="Celo" />,
//   Cronos: <Image src={cronos}  height={20} width={20}  alt="Cronos" />,
//   Fantom: <Image src={fantom}  height={20} width={20}  alt="Fantom" />,
//   Aurora: <Image src={aurora}  height={20} width={20}  alt="Aurora" />,
//   Solana: <Image src={solana}  height={20} width={20}  alt="Solana" />,
//   Sui: <Image src={sui}  height={20} width={20}  alt="Sui" />,
// };
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const datas = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];
// export default function Home() {
//   const [data, setdata] = useState([]);
//   const [pieChartData, setPieChartData] = useState([]);
//   useEffect(() => {
//     fetch("/api/db")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `Network response was not ok: ${response.statusText}`
//           );
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const datas = data.arrProtocolData.flatMap((item) =>
//           item.chains.map((chain) => ({
//             ...item,
//             chain,
//           }))
//         );
//         setdata(datas);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);
//   useEffect(() => {
//     const sortedData = [...data].sort((a, b) => b.mcap - a.mcap);
//     const totalMarketCapOthers = sortedData
//       .slice(4) 
//       .reduce((total, dex) => total + dex.mcap, 0);
//     const pieData = [
//       ...sortedData.slice(0, 4), 
//       {
//         protocolname: "Others",
//         mcap: totalMarketCapOthers,
//       },
//     ];

//     setPieChartData(pieData);
//   }, [data]);
//   const format = (value) => {
//     if (value >= 1000000) {
//       return `${(value / 1000000).toFixed(2)}M`;
//     } else if (value >= 1000) {
//       return `${(value / 1000).toFixed(2)}K`;
//     } else {
//       return value;
//     }
//   };
//   console.log(pieChartData)
//   return (
//     <div>
//       <Navbar />

//       <div className="box">
//         <div className="group">
//           <div className="marketsize">
//             <div className="headers">
             
//               <div className="heading">Market size</div>
//               <div className="pagination">
//                 <div className="panigation">
//                   <div className="text-wrapper-6">1h</div>
//                 </div>
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-7">1d</div>
//                 </div>
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-7">1w</div>
//                 </div>
//               </div>
//             </div>
//             <div className="ranking">
//               <Image className="group-2" alt="Group" src={rank} />
//               <div className="text-wrapper-8">$390,821,262</div>
//               <Image className="icon" alt="Icon" src={dydx} />
//             </div>
//             <div className="data">
//               <div className="doughnut">
//               <PieChart width={180} height={185}>
//         <Pie
//           data={pieChartData}
//           dataKey="mcap"
//           // cx={80}
//           // cy={50}
//           innerRadius={55}
//           outerRadius={90}
//           fill="#82ca9d"
//           isAnimationActive={true}
//         >
//           {pieChartData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
  
//               </div>
//               <div className="exchanges">
//                 <div className="text-wrapper">
//                 <Image className="mark" alt="Mark" src={dydx} width={15} height={15} />
//                   DYDX
//                 </div>
//                 <div className="text-wrapper">
//                 <Image className="mark" alt="Mark" src={fxdx} width={15} height={15}/>
//                   GMX
//                 </div>
//                 <div className="text-wrapper">
//                 <Image className="mark" alt="Mark" src={fxdx}  width={15} height={15}/>
//                   FXDX
                 
//                 </div>
//                 <div className="text-wrapper">
//                 <Image className="mark" alt="Mark" src={fxdx}  width={15} height={15}/>
//                   Oseidon
                  
//                 </div>
//                 <div className="text-wrapper">Others</div>
//               </div>
//             </div>
//           </div>
//           <div className="chartcontainer">
//             <div className="heading">
//               Total value Locked
//               <div className="rightheading">
//                 <div className="all">
//                   All
//                   <Image src={order} />
//                 </div>
//                 <div className="candle">
//                   <Image src={candle} />
//                 </div>
//               </div>
//             </div>
//             <div className="minih">
//               <div className="tvlprice">$37.903billion</div>
//               <div className="pagination">
//                 <div className="panigation">
//                   <div className="text-wrapper-6">1d</div>
//                 </div>
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-7">1w</div>
//                 </div>
//                 <div className="div-wrapper">
//                   <div className="text-wrapper-7">1M</div>
//                 </div>
//               </div>
//             </div>
//             <div className="linechart">
//               <LineChart width={800} height={200} data={datas}>
            
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
              
//                 <Line
//                   type="monotone"
//                   dataKey="pv"
//                   stroke="#8884d8"
//                   activeDot={{ r: 8 }}
//                 />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//               </LineChart>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="div">
//         <div className="tableheader">
//           <div className="tmainhead">Crypto Derivatives</div>
//           <div className="searchbar">
//             <div className="search">
//               <Image src={search} alt="search" />
//               <input placeholder="Search (eg. dydx, Gmx)" />{" "}
//             </div>
//           </div>
//         </div>

//         <div className="datatable">
//           <div className="tables">
//             <div className="table">
//               <div className="thead-rank">#</div>
//               <div className="thead-name">Name</div>
//               <div className="thead-tvl">TVL</div>
//               <div className="thead-protocol">Protocol</div>
//               <div className="thead-marketcap">Market Cap</div>
//               <div className="thead-7dchange">7d Change</div>
//               <div className="thead-pools">Pools</div>
//               <div className="thead-last30">Last 30d</div>
//             </div>
//           </div>
//           {data.map((item, index) => (
//             <div className="tablecells">
//               <div className="tablecell" key={index}>
//                 <div className="tablecell-rank">{index + 1}</div>
//                 <div className="tablecell-name">
//                   <div className="nameimg">
//                   <Image src={item.logo} alt={item.protocolname} width={20} height={20} margin={1}/></div>
//               <div> {item.protocolname}</div>
                 
//                 </div>
//                 <div className="tablecell-tvl">$ {format(item.tvl)}</div>
//                 <div className="tablecell-protocol" key={index}>
//               {item.chains.map((chain, chainIndex) => (
//               <div key={chainIndex} className="space-svg">
//               {chainSVGs[chain]} 
//             </div>
//               ))}
//             </div>
//           <div className="tablecell-marketcap">
//                   {item.mcap ? format(item.mcap) : "N/A"}
//                 </div>
//                 <div className="tablecell-7dchange">
//                   {item.change_7d !== null && item.change_7d !== undefined
//                     ? `${item.change_7d.toFixed(2)}%`
//                     : "N/A"}
//                 </div>
//                 <div className="tablecell-pool">{item.poolLength}</div>
//                 <div className="tablecell-last30d">
//                 <AreaChart
//   width={180}
//   height={50}
//   data={datas} 
// >
//   <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="red" />
// </AreaChart>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
