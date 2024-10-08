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
import Logo from '../icons/Logo.png';


const menuItems = [
  { icon: Home, label: 'Home', isActive: true },
  { icon: List, label: 'Pre-Requisite', isActive: false  },
  { icon: Speedometer, label: 'Load Test', isActive: false  },
  { icon: Security, label: 'Security Test', isActive: false  },
  { icon: Stack, label: 'Architecture', isActive: false  },
  { icon: Crown, label: 'Plans', isActive: false  },
  { icon: Sheet, label: 'Reports', isActive: false  },
  { icon: Headphones, label: 'Support', isActive: false  },
];

function Sidebar({ expanded, setExpanded }) {
  return (
    <>
      <div className={`icon-container ${expanded ? "full-icon-container" : ""}`}>
        <div>

        <div className='icon-container-head'>
          <img src={Logo} alt={`Label`} />
        </div>

        <div className='icon-container-mid'>
          {menuItems.map(({ icon, label, isActive }, index) => (
            <div
              key={index}
              className={`menu-icon ${isActive ? "active" : ""} ${expanded ? "full-width-icon" : ""}`}
              onClick={()=>handelClick(label, isActive)}
            >
              <img src={icon} alt={`${label} Icon`} />
              {expanded && <p>{label}</p>}
            </div>
          ))}
        </div>
        </div>

        <div className="sidebar-toggle-btn">
          <div className="menu-icon" onClick={() => setExpanded(!expanded)}>
            <img src={expanded ? Minimize : Expand} alt="Toggle Icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
