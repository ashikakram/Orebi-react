import React from 'react'

export const Container = ({className,children}) => {
  return (
    <div className={`mx-auto ${className}`}>{children}</div>
  )
}
