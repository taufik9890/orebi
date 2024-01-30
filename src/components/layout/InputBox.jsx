import React from 'react'

const InputBox = (props) => {
  return (
    <div className={props.className}>
      <h1 className='text-base text-primary font-dm font-bold mb-2'>{props.title}</h1>
      <props.as placeholder={props.placeholder} className='placeholder:font-dm placeholder:text-sm placeholder:text-secondaryGray placeholder:font-normal border-b border-solid border-border pb-1 w-full outline-0'/>
    </div>
  )
}

export default InputBox
