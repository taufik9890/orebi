import React from 'react'
import Flex from '../Flex'
import Footerheader from './Footerheader'
import { helpData } from './helpData'
import { shopData } from './shopData'
import Image from '../Image'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='bg-white-100 pt-[55px]'>
  
    <div className='container '>
        <Flex>
            <div className='w-[10%]'>
                <div className='mb-4'>
                <Footerheader title='Menu'/>
                </div>
            {
        helpData.map((item,i)=>(
            <div links={item.link} key={i}>
                <h5 className='text-sm font-normal font-primaryFont text-gray mb-2'>{item.title}</h5>

            </div>
        ))
      }
            </div>
            <div className='w-[10%]'>
                <div className='mb-4'>
                <Footerheader title='Shop'/>
                </div>
            {
        shopData.map((item,i)=>(
            <div links={item.link} key={i}>
                <h5 className='text-sm font-normal font-primaryFont text-gray mb-2'>{item.title}</h5>

            </div>
        ))
      }
            </div>
            <div className='w-[10%]'>
                <div className='mb-4'>
                <Footerheader title='Help'/>
                </div>
            {
        helpData.map((item,i)=>(
            <div links={item.link} key={i}>
                <h5 className='text-sm font-normal font-primaryFont text-gray mb-2'>{item.title}</h5>

            </div>
        ))
      }
            </div>
            <div className='w-[645px] pl-[145px] pr-[256px]'>
                <Footerheader title='(052) 611-5711
company@domain.com'/>
                <p className='text-sm font-normal font-primaryFont text-gray mt-3'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div>

            </div>
            <Image src={footerlogo} className='w-[122px] h-[29px]'/>
        </Flex>
        <Flex className='justify-between items-center py-16'>
                <div className='flex justify-between items-center w-[100px]'>
                <FaFacebookF/>
                <FaLinkedinIn/>
                <BsInstagram/>
                </div>
                <p className='text-sm font-normal font-primaryFont text-gray '>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </Flex>

      
    </div>
          
    </div>
    </>
  )
}

export default Footer
