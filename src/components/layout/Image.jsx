import React from 'react'

const Image = ({imgsrc, className}) => {
  return (
    <>
    <img className={className} src={imgsrc} alt="" />
    </>
  )
}

export default Image
