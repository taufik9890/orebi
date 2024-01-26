import React from 'react'
import Flex from './Flex'
import Container from './Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaVanShuttle } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";

const BannerBotton = () => {
  return (
    <div className='border border-solid border-[#f8f8f8]'>
    <Container>
        <Flex className='flex justify-between'>
            <Flex className='md:flex  items-center py-7'>
            <PiNumberTwoBold className='text-xl font-bold'/>
            <h4 className='text-secondary text-base md:pl-3'>Two years warranty</h4>
            </Flex>
            <Flex className='md:flex items-center py-7'>
            <FaVanShuttle  className='text-xl font-bold'/>
            <h4 className='text-secondary text-base md:pl-3'>Free shipping</h4>
            </Flex>
            <Flex className='md:flex items-center py-7'>
            <SlReload  className='text-xl font-bold'/>
            <h4 className='text-secondary text-base md:pl-3'>Return policy in 30 days</h4>
            </Flex>


        </Flex>
      
    </Container>
    </div>
  )
}

export default BannerBotton
