import React from 'react'

const Heading = ({title, className}) => {
  return (
    <div>
      <h2 className={ className? className : `text-[39px] font-dm font-bold text-primary`}>{title}</h2>
    </div>
  )
}

export default Heading
