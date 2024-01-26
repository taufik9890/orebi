import React, { useEffect, useState } from 'react'
import Image from './Image';
import Flex from './Flex';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import List from './List';
import ListItems from './ListItems';
import logo from '../../assets/images/logo.png'
import Container from './Container';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
  useEffect(()=>{
    const scrollWidth =()=>{
      // console.log(window.innerWidth);
      if(window.innerWidth < 768){
        // console.log('ami ekhon responsive');
        setShowMenu(false)
      }
      else{
        setShowMenu(true)
      }
    }
    scrollWidth()
    window.addEventListener('resize', scrollWidth)
  }, [])

  return (
    <>
    <nav className='py-8'>
      <Container>
      <Flex className="md:flex ">
            <div className="w-4/12 ">
              <Image imgsrc={logo} />
              {/* <img src={logo} alt="" /> */}
              {/* <img src='./assets/images/logo.png' alt="" /> */}
              {/* <Image imgsrc='./assets/images/logo.png'/> */}
            </div>
            <div className="md:w-8/12 w-full ">
              <HiMiniBars3CenterLeft
              onClick={()=>setShowMenu(!showMenu)}
                className="block md:hidden ml-auto absolute top-2 right-2 cursor-pointer"
              />
              {showMenu &&
              (
                <List className="md:flex text-center  mt-5 md:mt-0 font-dm text-sm font-normal gap-x-10">
                  <ListItems
                    className="text-black text-sm font-bold hover:font-bold my-1 lg:my-0"
                    listItems="Hello"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Shop"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="About"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Contacts"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Journal"
                  />
                </List>
              )}
            </div>
          </Flex>
      </Container>
      </nav>
      
    </>
  )
}

export default Navbar
