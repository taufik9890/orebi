import React from 'react'
import SidebarContent from './SidebarContent'
import { Brands, Category, Colors, Prices } from '../../../Data/Data'
// import { Category, Colors } from '../../../data/Data'

const LeftSidebar = () => {
  return (
    <div> 
      <SidebarContent title='Shop by Category' dropDown={true} data={Category}/>
      <SidebarContent title='Shop by Colors' dropDown={false} data={Colors}/>
      <SidebarContent title='Shop by Brands' dropDown={true} data={Brands}/>
      <SidebarContent title='Shop by Prices' dropDown={false} data={Prices}/>
      {/* <SidebarContent title='Shop by Color' dropDown={true}/>
      <SidebarContent title='Shop by Brand' dropDown={true}/>
      <SidebarContent title='Shop by Price' dropDown={true}/> */}
    </div>
  )
}

export default LeftSidebar
