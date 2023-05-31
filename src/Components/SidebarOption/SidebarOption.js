import React from 'react'
import './SidebarOption.css';
import { Link } from 'react-router-dom';


function SidebarOption({ Icon, option, path, activeTab }) {

  const isActive = option === activeTab;

  return (
    <div className={`sidebarOption ${isActive ? 'active' : ''}`}>
      <Link to={path}>
          {Icon}
          <span>{option}</span>
      </Link>
    </div>
    
  )
}

export default SidebarOption