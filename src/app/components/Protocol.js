"use client";
import { use, useEffect, useState } from "react";
import styles from "../styles/protocol.module.css";
import axios from "axios";
import Image from "next/image";
import blockExplorer from "../protocols/blockexplorers";
import arrowup from "../../assests/arrowup.svg";
import link from "../../assests/link.svg";

const Protocol = (props) => {
  const protocol = props.props;
  const [Logo, setLogo] = useState();
  const [Name, setName] = useState();
  const [chains, setChains] = useState([]);
  const [url, setURL] = useState();

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("https://www.deripulse.com/api/db");
      const data = resp.data.arrProtocolData;
      const filtereddata = data.filter((dt) => dt.slug === protocol);
      //console.log(filtereddata[0]);
      setLogo(filtereddata[0].logo);
      setName(filtereddata[0].protocolname);
      setChains(filtereddata[0].chains);
      setURL(filtereddata[0].url);
    }
    fetchData();
  }, []);

  if (Logo !== undefined) {
    console.log(chains);
    return (
      <div>
        <div className={styles.part1}>
          <div>
            <Image
              className={styles.logo}
              src={Logo}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.name}>{Name}</div>
          <div className={styles.chains}>
            {chains.map((chain, index) => (
              <div key={index} className={styles.chain}>
                {chain}
              </div>
            ))}
          </div>

          <div className={styles.info}>
            {url && (
              <div className={styles.infobox}>
                <Image className={styles.urlClick} src={link} />
                {new URL(url).hostname}
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  <Image src={arrowup} />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.tvlBox}>

          </div>
          <div className={styles.tvlChart}></div>
          <div className={styles.tvlStats}></div>
        </div>
        <div className={styles.part3}>
          <div className={styles.pools}>
          </div>
        </div>
      </div>
    );
  }
};

export default Protocol;
