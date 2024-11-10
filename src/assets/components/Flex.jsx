import React from 'react'

export const Flex = ({className,children}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}
