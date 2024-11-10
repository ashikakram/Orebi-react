import React from 'react'

const Search = ({className,}) => {
  return (
    <input type={'text'} className={`${className}`} placeholder={'Search Products'} />
  )
}

export default Search