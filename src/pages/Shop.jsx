import React, { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Breadcumb from "../components/layout/Breadcumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import LeftSidebar from "../components/layout/LeftSidebar";
import { IoFilterCircleSharp } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);

  let handlePaginationChange = (e) => {
    setShowNumber(e.target.value);
  };

  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    const scrollWidth = () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 575) {
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
    <div >
      <Container>
          <Breadcumb/>
        <Flex className="relative flex justify-between gap-x-10">
          {showMenu && (
            <div className="bg-primaryBg absolute left-0 top-0 z-50 w-full  p-3 sm:static sm:w-1/4 sm:bg-transparent">
              <FaTimesCircle
                className="block cursor-pointer text-end text-primary sm:hidden"
                onClick={() => setShowMenu(!showMenu)}
              />
              <LeftSidebar />
            </div>
          )}

          <div className="relative w-full sm:w-3/4  ">
            <Flex className="flex flex-wrap items-center gap-x-10">
              <div>
                <IoFilterCircleSharp
                  onClick={() => setShowMenu(!showMenu)}
                  className="inline-block cursor-pointer text-2xl text-secondaryGray sm:hidden"
                />
              </div>
              <Flex className="flex items-center gap-x-3 ">
                <span className="text-secondaryGray">Sort by: </span>
                <select
                  id="countries"
                  class="focus:border-black-500  block rounded-lg border border-gray p-2.5 font-dm text-base  font-normal text-secondaryGray focus:ring-blue-500 md:w-[239px] "
                >
                  <option
                    value="BD"
                    className="font-dm text-base font-normal text-secondaryGray "
                  >
                    Bangladesh
                  </option>
                  <option
                    value="US"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    United States
                  </option>
                  <option
                    value="CA"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    Canada
                  </option>
                  <option
                    value="FR"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    France
                  </option>
                  <option
                    value="DE"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    Germany
                  </option>
                </select>
              </Flex>

              <Flex className="mt-3 flex items-center gap-x-3 sm:mt-0">
                <span className="text-secondaryGray">Show: </span>
                <select
                  onChange={handlePaginationChange}
                  id="countries"
                  class="focus:border-black-500  block rounded-lg border border-gray p-2.5 font-dm text-base  font-normal text-secondaryGray focus:ring-blue-500 md:w-[100px] "
                >
                  <option
                    value="12"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    12
                  </option>
                  <option
                    value="42"
                    className="font-dm text-base font-normal text-secondaryGray "
                  >
                    42
                  </option>
                  <option
                    value="32"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    32
                  </option>
                  <option
                    value="24"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    24
                  </option>
                  <option
                    value="14"
                    className="font-dm text-base font-normal text-secondaryGray"
                  >
                    14
                  </option>
                </select>
              </Flex>
            </Flex>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
