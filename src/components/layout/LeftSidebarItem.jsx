import React, { useState } from 'react'
import SmallerTitle from './SmallerTItle'
import Flex from './Flex'
import { GoTriangleDown } from "react-icons/go";
import { FaPlus } from "react-icons/fa";


const LeftSidebarItem = ({subDropDown, title, children, color}) => {


    
  const [show, setShow] = useState(false)
  const [drop , setDrop] = useState(subDropDown)
  return (
    <div>
      {
        drop? <div onClick={()=>setShow(!show)}  className='my-6 flex cursor-pointer items-center justify-between'>
          <div className='flex gap-1 items-center'>
            {
              color && 
              <span className='inline-block h-3 w-3 rounded-full' style={{background: color}}></span>
            }

            <p className='text-base text-secondaryGray font-normal font-dm'>{title}</p>
          </div>
        <FaPlus className='text-secondaryGray text-sm'/>
        </div> :
        <div   className='my-6 flex cursor-pointer items-center justify-between'>
          <div className='flex gap-1 items-center'>

          <span className='inline-block h-3 w-3 rounded-full' style={{background: color}}></span>
        <p className='text-base text-secondaryGray font-normal font-dm'>{title}</p>
          </div>
        </div>
      }
      
      {
        show && 
        <div>
            {children}
        </div>
        
      }
      


    </div>
  )
}

export default LeftSidebarItem
