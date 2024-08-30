import React from 'react'
import Header from './Header.jsx';
import Dashboard from './Dashboard.jsx';

function Home({expanded , setExpanded}) {
  return (
    <div>
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header label={'Home'}/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
