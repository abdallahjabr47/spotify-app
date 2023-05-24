import React from 'react'
import './SidebarOption.css';
import { Link } from 'react-router-dom';


function SidebarOption({ Icon, option, path}) {
  return (
    <div className='sidebarOption'>
      <Link to={path}>
          {Icon}
          <span>{option}</span>
      </Link>
    </div>
    
  )
}

export default SidebarOption