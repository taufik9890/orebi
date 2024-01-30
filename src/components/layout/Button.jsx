import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='w-[200px] bg-primary py-4 text-white font-dm font-bold text-sm'>{title}</button>
    </div>
  )
}

export default Button
