import styles from "../styles/toppools.module.css";
import React from "react";
import Image from "next/image";

import star from "../../assests/star.svg";
const TopPools = () => {
  return (
    <div className={styles.topGainers}>
      <div className={styles.Heading}>
        <span id="TG">Top Gainers</span>
        <div className={styles.star}>
          <Image src={star} alt="X" />
        </div>
      </div>
    </div>
  );
};
export default TopPools;
