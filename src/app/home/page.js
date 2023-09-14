import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import "./home.css"
import rank from "../../assests/rank.svg"
import dydx from "../../assests/dydx.svg"
import fxdx from "../../assests/fxdx.svg"
import { PieChart, Pie } from 'recharts';
import search from "../../assests/search.svg"
export default function Home() {
  const data = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
];

  return (
    <div>

     <Navbar/>

     <div className="box">
      <div className="group">
        <div className="marketsize">
          <div className='headers'>
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

<div  className='piechart'></div>
<div className='exchanges'>
            <div className="text-wrapper">DYDX
            <Image className="mark" alt="Mark" src={dydx}/>
            </div>
            <div className="text-wrapper">GMX
            <Image className="mark" alt="Mark" src={fxdx} />
            </div>
            <div className="text-wrapper">FXDX
            <Image className="mark" alt="Mark" src={fxdx} /></div>
            <div className="text-wrapper">Oseidon
           <Image className="mark" alt="Mark"   src={fxdx} />
            </div>
            <div className="text-wrapper">Others</div>
            </div>
        
          </div>
        </div>
        <div  className='chartcontainer'>
        <div className="heading">Total value Locked</div>
        </div>
      </div>
    </div>
    <div className='div'>
    <div className='tableheader'>
          <div className='tmainhead'>Crypto Derivatives</div>
          <div className='searchbar'>
            <div  className='search'>
              <Image src={search} alt='search'/>
              <input
              placeholder='Search (eg. dydx, Gmx)'/> </div>
          </div>
        </div>

<div className='datatable'>
  <div className='tables'>
    <div className='table'>
      <div  className='thead-rank'>#</div>
      <div  className='thead'>Name</div>
      <div  className='thead'>TVL</div>
      <div  className='thead'>Protocol</div>
      <div  className='thead'>Market Cap</div>
      <div  className='thead'>7d Change</div>
      <div  className='thead'>Pools</div>
      <div  className='thead'>Last 30d</div>
    </div>
  </div>
  <div className='tablecells'>
  <div className='tablecell'>1</div>
    <div className='tablecell'>
      <Image src={dydx}/>
      GMX V1</div>
    <div className='tablecell'>$446.56M</div>
    <div className='tablecell'>$NaN</div>
    <div className='tablecell'>Arbitrum</div>
    <div className='tablecell'>3.85%</div>
    <div className='tablecell'>04</div>
    <div className='tablecell'>
      <Image src={dydx}/>
    </div>
</div>
</div>
</div>

    </div>
  );
}
