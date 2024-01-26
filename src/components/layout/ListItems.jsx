import React from 'react'
import { Link } from 'react-router-dom'

const ListItems = ({listItems, className, href}) => {
  return (
    <li className={className}>
      <Link to={href}>
      {listItems}
      </Link>
    </li>
  )
}

export default ListItems
