import React, { useState, useEffect } from 'react';
import Questionmark from '../icons/Questionmark.svg';
import arrow from '../icons/Arrow.svg';


const StatCard = ({ title, value, value1, value2, subtitle }) => {
  const [isDoubleValue, setDoubleValue] = useState(false);

  useEffect(() => {
    if (value1 && value2)
       setDoubleValue(true);
  }, [value1, value2]);

  return (
    <div className="stat-card">
      <div className='title'>
        <span className="title-stat-card">{title}</span>
        <div className='icon'>
          <img src={Questionmark}></img>
        </div>
      </div>
      <span className="value-stat-card">
        {isDoubleValue ? `${value1}/${value2}` : value}
      </span>
      <div className='card-footer'>
        {isDoubleValue ? (
          <div
            style={{ width: `80%` }}
            className="percentage-total"
          >
            <div style={{ width: `60%`, color: '#9747FF' }}
              className="percentage">

            </div>
          </div>
        ) : (
          subtitle && <span className='green' style={{ color: '#22C55E' }}>{subtitle}</span>
        )}
        <div className='arrow'>
          <img src={arrow}></img>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
