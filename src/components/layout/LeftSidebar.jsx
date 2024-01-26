import React from 'react'
import SidebarContent from './SidebarContent'
import { Category } from '../../../data/Data'

const LeftSidebar = () => {
  return (
    <div> 
      <SidebarContent title='Shop by Category' dropDown={true} data={Category}/>
      {/* <SidebarContent title='Shop by Color' dropDown={true}/>
      <SidebarContent title='Shop by Brand' dropDown={true}/>
      <SidebarContent title='Shop by Price' dropDown={true}/> */}
    </div>
  )
}

export default LeftSidebar
