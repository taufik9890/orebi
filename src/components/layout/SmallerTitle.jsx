import React from 'react'

const SmallerTitle = ({title, className}) => {
  return (
    <div className={className}>
      <h2 className='font-bold text-[20px] font-dm text-primary'>{title}</h2>
    </div>
  )
}

export default SmallerTitle
