import React from 'react'
import Image from './Image'
import Badge from './Badge'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

import Flex from './Flex'

const Product = ({src, badge, title}) => {
  return (
    <div className='mx-3'>
    <div className='relative group overflow-hidden'>
      
        <Image className='w-full' imgsrc={src}/>
        {
            badge && 
            <Badge title={title}/>
        }
        <div className='absolute bg-white h-40 w-full bottom-[-160px] left-0 group-hover:bottom-0 transition-all duration-300 ease-in-out'>
          
          <div className='p-7 text-end justify-end'>
            <Flex className='flex justify-end items-center mb-5'>
              <p className='text-base text-secondaryGray mr-4 '>Add to Wish List</p>
              <FaHeart  className='text-sm'/>
            </Flex>
            <Flex className='flex justify-end items-center mb-5'>
              <p className='text-base text-secondaryGray mr-4'>Compare</p>
              <TfiReload className='text-sm'/>
            </Flex>
            <Flex className='flex justify-end items-center'>
              <p className='text-base text-secondaryGray mr-4'>Add to Cart</p>
              <FaShoppingCart className='text-sm'/>
            </Flex>
          </div>
        </div>
       
    </div>
    <Flex className='py-6 bg-white flex justify-between z-50 m'>
          <div>
            <h4 className='text-xl font-bold text-primary'>Basic Crew Neck Tee</h4>
            <span className='text-secondaryGray text-base'>Black</span>
          </div>
          <span className='text-secondaryGray text-base'>$44.00</span>
        </Flex>
    </div>
  )
}

export default Product
