import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='absolute top-5 left-5 bg-primary py-2 w-24 text-center text-white font-bold'>
      {title}
    </span>
  )
}

export default Badge
