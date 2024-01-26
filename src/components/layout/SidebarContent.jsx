import React, { useState } from 'react'
import SmallerTitle from './SmallerTItle'
import Flex from './Flex'
import { GoTriangleDown } from "react-icons/go";
import LeftSidebarItem from './LeftSidebarItem';

const SidebarContent = ({title, dropDown, data}) => {
  const [show, setShow] = useState(dropDown)
  const [drop , setDrop] = useState(dropDown)

  console.log(data);
  return (
    <div className='mb-12'>
      {
        drop? <div onClick={()=>setShow(!show)}  className=' flex cursor-pointer items-center justify-between'>
        <SmallerTitle title={title}/>
        <GoTriangleDown />
        </div> :
        <div   className='flex cursor-pointer items-center justify-between'>
        <SmallerTitle title={title}/>
        </div>
      }
      
      {
        show && 
        <>
        {
          data.map((item)=>(
<LeftSidebarItem title={item.name} color='red' subDropDown={true}>
          Item 1
          </LeftSidebarItem>
          ))
        }
        
        </>
      }
      {
        !drop && 
        <>
        {
          data.map((item)=>(
            <LeftSidebarItem title={item.name} subDropDown={true}>
          <p className='text-sm text-secondaryGray font-normal font-dm'>Item 1</p>
          </LeftSidebarItem>
          ))
        }
        
        </>
      }
      


    </div>
  )
}

export default SidebarContent
