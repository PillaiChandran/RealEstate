import React from 'react';


function Header() {
  return (
    <div className='header'>
      <img className='logo' src="logo.jpg" alt='logo'></img> 
      <div className='anchor'>
      <a href='/'>Residencies</a>
      <a href='/'>Our Value</a>
      <a href='/'>Contact Us</a>
      <a href='/'>Get Started</a>
      </div>
      <button className='headerButton'> Contact </button>
    </div>
  )
}

export default Header;
