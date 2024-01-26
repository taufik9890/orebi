import React from 'react'

const List = ({children, className}) => {
    console.log(className);
  return (

    <ul className={className}>{children}</ul>
  )
}

export default List
