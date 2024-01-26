import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Dropdown from './Dropdown'
import { FaBars } from "react-icons/fa";
import List from './List';
import ListItems from './ListItems';
import Search from './Search';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import sungl from '../../assets/images/sunglass.png'
import Image from './Image';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showCategory, setShowCategory] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const categoryRef = useRef()
  const userRef = useRef()
  const cartRef = useRef()

  // const handleDropDown =()=>{
  //   setShowDropDown(!showDropDown)
  // }

  useEffect(()=>{
    document.body.addEventListener('click', (e)=>{
      // console.log(ref.current);
      console.log(e.target);
      if(categoryRef.current.contains(e.target)){
        setShowCategory(true)
      }
      else{
        setShowCategory(false)
      }


      if(userRef.current.contains(e.target)){
        setShowUser(true)
      }
      else{
        setShowUser(false)
      }

      if(cartRef.current.contains(e.target)){
        setShowCart(true)
      }
      else{
        setShowCart(false)
      }



    })
  })

  return (
    <div className='bg-[#F5F5F3] py-6 items-center '>
      <Container>
        <Flex className='justify-between flex pb-0'>
          <div  className='relative flex items-center '>
            <Dropdown className=' cursor-pointer'  dropref={categoryRef}>
              <p className='flex items-center gap-x-2  font-dm font-normal text-sm'>
              <FaBars />
               <span className='hidden md:block'>Shop by Category</span></p>
           </Dropdown >
            {
              showCategory && 
              <List className='bg-primary text-sm font-dm font-normal  text-[#767676]  w-[263px] absolute top-14 z-50 '>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Accesories' href='aaaf'/>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Furniture'/>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Electronics'/>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Clothes'/>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Bags'/>
              <ListItems className='py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='Home appliances'/>
            </List>
            }
            
          </div>
          <div className='md:w-[600px] w-auto relative'>
            <Search className='py-4 px-5 w-full placeholder:text-[#c4c4c4]' placeholder='Search Products'/>
            <div className='absolute top-[50%] translate-y-[-50%] right-5'>

            <FaSearch  />
            </div>
          </div>
          <div  className='flex items-center'>
            <Flex className='flex items-center'>
              <Dropdown dropref={userRef} className='relative cursor-pointer'>
              <div className='flex items-center mr-10'>
                <FaUser />
                <VscTriangleDown />
              </div>
              {
              showUser && 
              <List className='z-50 text-center text-sm font-dm font-normal    w-[200px] absolute top-14 right-[50%]'>
              <ListItems className='bg-white text-primary hover:bg-primary  py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='My Account' href='aaaf'/>
              <ListItems className=' bg-white text-primary hover:bg-primary hover:text-white  py-4 px-5 hover:pl-7 ease-in delay-100 hover:font-bold '  listItems='Log Out'/>
            </List>
            }
              </Dropdown>
              



              <div>
              <Dropdown dropref={cartRef} className='relative cursor-pointer'>
                
              <div className='flex items-center mr-10'>
              <FaCartShopping className='text-2xl' />
              </div>
              {
              showCart && 
              <div className='z-50 text-center text-sm font-dm font-normal    w-[360px] absolute top-14 right-0 border-[#f0f0f0] border-1'>
                <div className='p-5 bg-[#F5F5F3]'>
                  <Flex className='flex items-center'>
                    <div className=' h-20 w-20'>
                      <Image imgsrc={sungl}/>
                    </div>
                    <div className='pl-5 pr-14 text-start'>
                      <h3 className='text-base font-bold text-black'>Black Smart Watch</h3>
                      <span className='text-sm font-bold text-black'>$44.00</span>
                    </div>
                    <div><ImCross /></div>
                  </Flex>
                </div>
                <div className='p-5 bg-white border-1 border-primary text-start'>
                  <h3 className='text-base text-[#767676]'>Subtotal: <span className='font-bold text-primary]'>$44.00</span></h3>
                  <Flex className='flex justify-between mt-3'>
                    <Link to='#' className=' py-4 px-9 border-solid border border-primary border-1 font-bold text-base'>View Cart</Link>
                    <Link to='#' className='py-4 px-9 border-solid border bg-primary border-1 font-bold text-white text-base'>Checkout</Link>
                  </Flex>
                </div>
              </div>
            //   <List className='text-center text-sm font-dm font-normal    w-[360px] absolute top-14 right-0'>
            //   <ListItems className='bg-white text-primary hover:bg-primary  py-4 px-5 border-b border-b-[#767676] hover:text-white hover:pl-7 ease-in delay-100 hover:font-bold' listItems='My Account' href='aaaf'/>
            //   <ListItems className=' bg-white text-primary hover:bg-primary hover:text-white  py-4 px-5 hover:pl-7 ease-in delay-100 hover:font-bold '  listItems='Log Out'/>
            // </List>
            }
              </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
