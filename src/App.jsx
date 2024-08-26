import React from 'react';
import Sidebar from './assets/components/Sidebar.jsx';
import Header from './assets/components/Header.jsx';
import Dashboard from './assets/components/Dashboard.jsx';
import { useState } from 'react'

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
