import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function SecurityTest({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'SecurityTest'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default SecurityTest
