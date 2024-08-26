import React from 'react';

const testData = [
  { name: 'This is a random big testing name', status: 'Paused', users: 30, duration: '5m 0s', startTime: '04/19/2024 08:45:26 PM' },
  { name: 'This is a random big testing name', status: 'Completed', users: 20, duration: '5m 0s', startTime: '04/19/2024 08:45:26 PM' },
  { name: 'This is a random big testing name', status: 'In Progress', users: 100, duration: '5m 0s', startTime: '04/19/2024 08:45:26 PM' },
  { name: 'This is a random big testing name', status: 'Paused', users: 50, duration: '5m 0s', startTime: '04/19/2024 08:45:26 PM' },
];

const TestTable = () => {
  return (
    <div className="test-table">
      <table>
        <thead>
          <tr>
            <th>Test Details</th>
            <th>Status</th>
            <th>Virtual Users</th>
            <th>Duration</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test, index) => (
            <tr key={index}>
              <td>{test.name}</td>
              <td>
                <span className={`chip ${test.status.replace(" ","-").toLowerCase()}`}>
                • {test.status}
                </span>
              </td>
              <td>{test.users}</td>
              <td>{test.duration}</td>
              <td>{test.startTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
