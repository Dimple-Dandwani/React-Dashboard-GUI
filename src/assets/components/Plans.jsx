import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function Plans({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'Plans'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Plans
