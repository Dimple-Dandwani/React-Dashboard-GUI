import { useState } from 'react';
import Crown from '../icons/crown.svg';
import Home from '../icons/home.svg';
import List from '../icons/list.svg';
import Speedometer from '../icons/speedometer.svg';
import Headphones from '../icons/headphones.svg';
import Expand from '../icons/expand.svg';
import Security from '../icons/security.svg';
import Minimize from '../icons/Minimize.svg';
import Sheet from '../icons/sheet.svg';
import Stack from '../icons/stack.svg';

function Sidebar({
  expanded,
  setExpanded
}) {


  return (
    <>
      <div className={`icon-container ${expanded ? "full-icon-container" : ""}`}>
        <div className='icon-container-head'>

        </div>
        <div className='icon-container-mid'>
          <div className={`menu-icon active ${expanded ? "full-width-icon" : ""}`}>
            <img src={Home}></img>
            {
              expanded && <p>Home</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={List}></img>
            {
              expanded && <p>Pre-Requisite</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Speedometer}></img>
            {
              expanded && <p>Load Test</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Security}></img>
            {
              expanded && <p>Security Test</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Stack}></img>
            {
              expanded && <p>Architecture</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Crown}></img>
            {
              expanded && <p>Plans</p>
            }
          </div>
          
          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Sheet}></img>
            {
              expanded && <p>Architecture</p>
            }
          </div>

          <div className={`menu-icon  ${expanded ? "full-width-icon" : ""}`}>
            <img src={Headphones}></img>
            {
              expanded && <p>Support</p>
            }
          </div>

        </div>
        <div className="sidebar-toggle-btn">
          <div className="menu-icon" onClick={()=>setExpanded(!expanded)}>
            <img src={expanded ? Minimize : Expand} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
