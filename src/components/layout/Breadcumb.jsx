import React from 'react'

const Breadcumb = ({children}) => {
  return (
    <div>
      <p className='font-normal text-sm font-dm text-secondaryGray mt-3 flex gap-x-1 items-center'>{children}</p>
    </div>
  )
}

export default Breadcumb
