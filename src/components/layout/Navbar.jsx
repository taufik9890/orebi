import React, { useEffect, useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import List from "./List";
import ListItems from "./ListItems";
import logo from "../../assets/images/logo.png";
import Container from "./Container";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    const scrollWidth = () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 768) {
        // console.log('ami ekhon responsive');
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <>
      <nav className="py-8">
        <Container>
          <Flex className="md:flex items-center ">
            <div className="w-4/12 ">
              <Image imgsrc={logo} />
              {/* <img src={logo} alt="" /> */}
              {/* <img src='./assets/images/logo.png' alt="" /> */}
              {/* <Image imgsrc='./assets/images/logo.png'/> */}
            </div>
            <div className="w-full md:w-8/12 ">
              <HiMiniBars3CenterLeft
                onClick={() => setShowMenu(!showMenu)}
                className="absolute right-2 top-2 ml-auto block cursor-pointer md:hidden"
              />
              {showMenu && (
                <List className="mt-5 gap-x-10  text-center font-dm text-sm font-normal md:mt-0 md:flex">
                  <ListItems
                    className="my-1 text-sm font-bold text-black hover:font-bold lg:my-0"
                    listItems="Home"
                  />
                  <ListItems
                    className="my-1 text-sm font-normal text-black hover:font-bold lg:my-0"
                    listItems="Shop"
                  />
                  <ListItems
                    className="my-1 text-sm font-normal text-black hover:font-bold lg:my-0"
                    listItems="About"
                  />
                  <ListItems
                    className="my-1 text-sm font-normal text-black hover:font-bold lg:my-0"
                    listItems="Contacts"
                  />
                  <ListItems
                    className="my-1 text-sm font-normal text-black hover:font-bold lg:my-0"
                    listItems="Journal"
                  />
                </List>
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
