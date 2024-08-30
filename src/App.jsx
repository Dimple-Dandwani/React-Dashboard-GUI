import React from 'react';
import Sidebar from './assets/components/Sidebar.jsx';
import Home from './assets/components/Home.jsx';
import PreRequisite from './assets/components/PreRequisite.jsx';
import Reports from './assets/components/Reports.jsx';
import LoadTest from './assets/components/LoadTest.jsx';
import SecurityTest from './assets/components/SecurityTest.jsx';
import Architecture from './assets/components/Architecture.jsx';
import Plans from './assets/components/Plans.jsx';
import Support from './assets/components/Support.jsx';
import { useState } from 'react'

function App() {
  const [expanded, setExpanded] = useState(false);
  const [tag, setTag] = useState('Home');

  const handelClick = (label, isActive) => 
    {
      if (label=='Home')
      {
        setTag('Hame');
        setExpanded(false);
        isActive = true;
      }
    }

  return (
    <div >
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className={`main-content ${expanded ? "expanded-main-content" : ""}`}>
        <tag expanded={expanded} setExpanded={setExpanded} />
      </div>
    </div>
  );
}

export default App;
