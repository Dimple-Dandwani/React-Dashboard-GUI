import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function LoadTest({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'LoadTest'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default LoadTest


