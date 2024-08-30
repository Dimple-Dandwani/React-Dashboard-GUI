import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function Support({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'Support'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Support
