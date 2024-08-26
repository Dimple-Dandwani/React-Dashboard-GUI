import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import Setting from '../icons/setting.svg';
const Header = () => {
  return (
    <div className="header">
      <h1>Home</h1>
      <div className="header-right">
        <button className="btn-basic">       
          <img className='icon' src={Setting}></img>
          Basic
          </button>
        <div className='icon'><FaBell /></div>
        <div className='icon'><FaUserCircle /></div>
      </div>
    </div>
  );
};

export default Header;
