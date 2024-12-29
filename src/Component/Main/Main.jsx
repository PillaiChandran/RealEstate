import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import CountUp from 'react-countup';


function Main() {
  return (
    <div className='Main'>

      <div className='circle'> </div>
      
      <h1 className='Maintext'>Discover  Most Perfect Property</h1>   
      <img className='Mainimage'  src="mainImage.jpeg" alt="construction"></img>
      <h4 className='supporttext'>Find beautiful properties that suite you the best.
        You will not face any difficulties in finding best place for you</h4>

        <button className='searchButton'>Search</button>
        <input type='text' className="search"></input>
        <IoLocationSharp className='icon' />

        <div className='awards'>
          <div className='award-item'> <CountUp start={7000} end={9000} duration={2} className='number' ></CountUp>+<br></br>Premium Properties </div>      
          <div className='award-item'>  <CountUp start={0} end={90} duration={2} className='number' ></CountUp>+  <br></br>Happy Clients </div>     
          <div className='award-item'> <CountUp start={0} end={25} duration={2} className='number' ></CountUp>+ <br></br>Award Winning </div>      
        </div>    
       </div>
  )
}

export default Main
