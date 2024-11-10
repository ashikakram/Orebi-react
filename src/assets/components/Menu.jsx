import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={`text-menuItemColor hover:text-black hover:font-bold ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu