import React from 'react';
import './Navbar.css'; 
import logo from "../../assests/logo.svg";
import x from "../../assests/x.svg";
import discord from '../../assests/discord.svg';
import medium from "../../assests/medium.svg";
import telegram from "../../assests/telegram.svg";
import Image from 'next/image';
function Navbar() {
  return (
    <div className='contianer'>
    <div className='nav-container'>
      <nav className="navbar">     
        <div className="logo">
          <Image src={logo} alt="Logo" />
          Deri Pulse
          <div className="partition"></div>
        </div>
        <div  className=''>
          <ul className="nav-links">
            <li><a href="home">Home</a></li>
            <li><a href="topPools">Top pools</a></li>
            <li><a href="Top chians">Top chains</a></li>
            <li><a href="Feed">Feed</a></li> 
          </ul>
        </div>
      </nav>
      <div className='nav-social'>
        <Image src={x} alt="X" />
        <Image src={discord} alt="Discord" />
        <Image src={medium} alt="Medium" />
        <Image src={telegram} alt="Telegram" />
      </div>
    </div>
    </div>
  );
}

export default Navbar;
