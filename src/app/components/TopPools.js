"use client";
import styles from "../styles/toppools.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import star from "../../assests/star.svg";
import loss from "../../assests/loss.svg";
import graphdown from "../../assests/graphdown.svg";
import graphup from "../../assests/graphup.svg";
import prediction from "../../assests/prediction.svg";
const TopPools = () => {
  const [TAPR, setTAPR] = useState([]);
  const [APR, setAPR] = useState([]);
  const [L_APR, setL_APR] = useState([]);
  const [avgAPR, setavgAPR] = useState();

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
        const res = await axios.get("http://localhost:3000/api/apr");
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

  if (APR.length !== 0) {
    return (
      <div>
        <div className={styles.part1}>
          <div className={styles.topGainers}>
            <div className={styles.Heading}>
              <span>Top Gainers</span>
              <div className={styles.star}>
                <Image src={star} alt="X" />
              </div>
            </div>
            <Image src={graphup} />
            <div className={styles.list}>
              <span>
                1. {APR[0].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  APR[0].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[0].apy1D.toFixed(4) > 0 ? "+" : ""}
                {APR[0].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  APR[0].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[0].apy7D.toFixed(4) > 0 ? "+" : ""}
                {APR[0].apy7D.toFixed(4)}
              </div>
            </div>
            <div className={styles.list2}>
              <span>
                2. {APR[1].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  APR[1].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[1].apy1D.toFixed(4) > 0 ? "+" : ""}
                {APR[1].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  APR[1].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[1].apy7D.toFixed(4) > 0 ? "+" : ""}
                {APR[1].apy7D.toFixed(4)}
              </div>
            </div>
            <div className={styles.list3}>
              <span>
                3. {APR[2].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  APR[2].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[2].apy1D.toFixed(4) > 0 ? "+" : ""}
                {APR[2].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  APR[2].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {APR[2].apy7D.toFixed(4) > 0 ? "+" : ""}
                {APR[2].apy7D.toFixed(4)}
              </div>
            </div>
          </div>
          <div className={styles.topLosers}>
            <div className={styles.Heading}>
              <span id="TG">Top Losers</span>
              <div className={styles.star}>
                <Image src={loss} alt="X" />
              </div>
            </div>
            <Image src={graphdown} alt="X" />
            <div className={styles.list}>
              <span>
                1. {L_APR[0].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  L_APR[0].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[0].apy1D.toFixed(4) > 0 ? "+" : ""}
                {L_APR[0].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  L_APR[0].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[0].apy7D.toFixed(4) > 0 ? "+" : ""}
                {L_APR[0].apy7D.toFixed(4)}
              </div>
            </div>
            <div className={styles.list2}>
              <span>
                2. {L_APR[1].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  L_APR[1].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[1].apy1D.toFixed(4) > 0 ? "+" : ""}
                {L_APR[1].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  L_APR[1].apy7D !== null && L_APR[1].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[1].apy7D === null
                  ? "-"
                  : L_APR[1].apy7D.toFixed(4) > 0
                  ? "+"
                  : "-"}
                {L_APR[1].apy7D === null || L_APR[1].apy7D === 0
                  ? ""
                  : L_APR[1].apy7D.toFixed(4)}
              </div>
            </div>
            <div className={styles.list3}>
              <span>
                3. {L_APR[2].symbol.substring(0, 12).replace(/-/g, " / ")}
              </span>
              <div
                className={`${styles.changeAPR1D} ${
                  L_APR[2].apy1D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[2].apy1D.toFixed(4) > 0 ? "+" : ""}
                {L_APR[2].apy1D.toFixed(4)}
              </div>
              <div className={styles.slash}> /</div>
              <div
                className={`${styles.changeAPR7D} ${
                  L_APR[2].apy7D !== null && L_APR[2].apy7D.toFixed(4) < 0
                    ? styles.redText
                    : styles.greenText
                }`}
              >
                {L_APR[2].apy7D === null
                  ? "-"
                  : L_APR[2].apy7D.toFixed(4) > 0
                  ? "+"
                  : "-"}
                {L_APR[2].apy7D === null
                  ? ""
                  : Math.abs(L_APR[2].apy7D.toFixed(4))}
              </div>
            </div>
          </div>

          <div className={styles.prediction}>
            <div className={styles.semiHeading}>
              AVG APY - {avgAPR.toFixed(4)}%
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.topPools}>Top Pools</div>
          <div className={styles.bar}>
            <table className={styles.textbar}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Pool Name</th>
                  <th>Price</th>
                  <th>Name</th>
                  
                  <th>APY%</th>
                  <th>Last 30d</th>
                  <th>Last 7d</th>
                </tr>
              </thead>
              <tbody className={styles.tablecells}>
                {TAPR.map((pool, index) => (
                  <tr key={index}>
                    <td className={styles.tmargin}>{index + 1}</td>
                    <td className={styles.tmargin}>{TAPR[index].symbol}</td>
                    <td className={styles.tmargin}>{TAPR[index].tvlUSD}</td>
                    <td className={styles.tmargin}>{TAPR[index].slug.toUpperCase()}</td>
                    
                    <td className={styles.tmargin}>{TAPR[index].apy.toFixed(2)}%</td>
                    <td className={styles.tmargin}>{TAPR[index].apy30D}</td>
                    <td className={styles.tmargin}>{TAPR[index].apy7D}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default TopPools;
