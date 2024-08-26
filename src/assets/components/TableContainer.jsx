import React from 'react'
import TestTable from './TestTable';
import DownArrow from '../icons/CloudArrowDown.svg';
import Funnel from '../icons/Funnel.svg';
import Slider from '../icons/Sliders.svg';
function TableContainer() {
  return (
    <div className='table-container'>
        <div className='table-header'>
        <div className='table-header-left'>
        <span className='active'>Load</span>
        <span>Security</span>
        <span>Architecture</span>
        </div>

        <div className='table-header-right'>
        <button className='btn-basic'><img className='icon' src={DownArrow}></img>Download All</button>
        <button className='btn-basic'><img className='icon' src={Funnel}></img>More Filters</button>
        <button  className='btn-basic'><img className='icon' src={Slider}></img>Sort By</button>
        </div>
        </div>

      <TestTable />
    </div>
  )
}

export default TableContainer

