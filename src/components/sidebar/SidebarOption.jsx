import React from 'react'

function SidebarOption({Icon, title, number, selected = false}) {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption__selected'}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption