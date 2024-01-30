import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import List from "./List";
import ListItems from "./ListItems";
import Search from "./Search";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import sungl from "../../assets/images/sunglass.png";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  // const handleDropDown =()=>{
  //   setShowDropDown(!showDropDown)
  // }

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);
      console.log(e.target);
      if (categoryRef.current.contains(e.target)) {
        setShowCategory(true);
      } else {
        setShowCategory(false);
      }

      if (userRef.current.contains(e.target)) {
        setShowUser(true);
      } else {
        setShowUser(false);
      }

      if (cartRef.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    });
  });

  return (
    <div className="items-center bg-[#F5F5F3] py-6 ">
      <Container>
        <Flex className="flex justify-between pb-0">
          <div className="relative flex items-center ">
            <Dropdown className=" cursor-pointer" dropref={categoryRef}>
              <p className="flex items-center gap-x-2  font-dm text-sm font-normal">
                <FaBars />
                <span className="hidden md:block">Shop by Category</span>
              </p>
            </Dropdown>
            {showCategory && (
              <List className="absolute top-14 z-50 w-[263px]  bg-primary  font-dm text-sm font-normal text-[#767676] ">
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Accesories"
                  href="aaaf"
                />
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Furniture"
                />
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Electronics"
                />
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Clothes"
                />
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Bags"
                />
                <ListItems
                  className="border-b border-b-[#767676] px-5 py-4 delay-100 ease-in hover:pl-7 hover:font-bold hover:text-white"
                  listItems="Home appliances"
                />
              </List>
            )}
          </div>
          <div className="relative w-auto md:w-[600px]">
            <Search
              className="w-full px-5 py-4 placeholder:text-[#c4c4c4] outline-0"
              placeholder="Search Products"
            />
            <div className="absolute right-5 top-[50%] translate-y-[-50%]">
              <FaSearch />
            </div>
          </div>
          <div className="flex items-center">
            <Flex className="flex items-center">
              <Dropdown dropref={userRef} className="relative cursor-pointer">
                <div className="mr-10 flex items-center">
                  <FaUser />
                  <VscTriangleDown />
                </div>
                {showUser && (
                  <List className="absolute right-[50%] top-14 z-50 w-[200px]    text-center font-dm text-sm font-normal">
                    <ListItems
                      className="border-b border-b-[#767676] bg-white  px-5 py-4 text-primary delay-100 ease-in hover:bg-primary hover:pl-7 hover:font-bold hover:text-white"
                      listItems="My Account"
                      href="aaaf"
                    />
                    <ListItems
                      className=" bg-white px-5 py-4 text-primary  delay-100 ease-in hover:bg-primary hover:pl-7 hover:font-bold hover:text-white "
                      listItems="Log Out"
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown dropref={cartRef} className="relative cursor-pointer">
                  <div className="mr-10 flex items-center">
                    <FaCartShopping className="text-2xl" />
                  </div>
                  {
                    showCart && (
                      <div className="border-1 absolute right-0 top-14 z-50    w-[360px] border-[#f0f0f0] text-center font-dm text-sm font-normal">
                        <div className="bg-[#F5F5F3] p-5">
                          <Flex className="flex items-center">
                            <div className=" h-20 w-20">
                              <Image imgsrc={sungl} />
                            </div>
                            <div className="pl-5 pr-14 text-start">
                              <h3 className="text-base font-bold text-black">
                                Black Smart Watch
                              </h3>
                              <span className="text-sm font-bold text-black">
                                $44.00
                              </span>
                            </div>
                            <div>
                              <ImCross />
                            </div>
                          </Flex>
                        </div>
                        <div className="border-1 border-primary bg-white p-5 text-start">
                          <h3 className="text-base text-[#767676]">
                            Subtotal:{" "}
                            <span className="text-primary] font-bold">
                              $44.00
                            </span>
                          </h3>
                          <Flex className="mt-3 flex justify-between">
                            <Link
                              to="#"
                              className=" border-1 border border-solid border-primary px-9 py-4 text-base font-bold"
                            >
                              View Cart
                            </Link>
                            <Link
                              to="#"
                              className="border-1 border border-solid bg-primary px-9 py-4 text-base font-bold text-white"
                            >
                              Checkout
                            </Link>
                          </Flex>
                        </div>
                      </div>
                    )
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
  );
};

export default Header;
