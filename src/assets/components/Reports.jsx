import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function Reports({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'Reports'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Reports
