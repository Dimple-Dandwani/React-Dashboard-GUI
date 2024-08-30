import React from 'react';
import StatCard from './StatCard';
import TableContainer from './TableContainer.jsx';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard title="Tests" value="29" subtitle="🡬 +25% from last week" />
        <StatCard title="Virtual Users" value1="32" value2="50" />
        <StatCard title="Minutes Used" value1="30" value2="50" />
      </div>
      <TableContainer />
    </div>
  );
};

export default Dashboard;
