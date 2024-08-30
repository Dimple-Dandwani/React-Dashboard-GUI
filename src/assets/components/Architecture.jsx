import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function Architecture({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'Architecture'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Architecture
