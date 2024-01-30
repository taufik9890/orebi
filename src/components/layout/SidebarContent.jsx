import React, { useState } from "react";
import SmallerTitle from "./SmallerTItle";
import Flex from "./Flex";
import { GoTriangleDown } from "react-icons/go";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ title, dropDown, data }) => {
  const [show, setShow] = useState(dropDown);
  const [drop, setDrop] = useState(dropDown);

  console.log(data);
  return (
    <div className="mb-12">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className=" flex cursor-pointer items-center justify-between"
        >
          <SmallerTitle title={title} />
          <GoTriangleDown />
        </div>
      ) : (
        <div className="flex cursor-pointer items-center justify-between">
          <SmallerTitle title={title} />
        </div>
      )}

      {show && (
        <>
          {data.map((item) => (
            <LeftSidebarItem
              title={item.name}
              color={item.code}
              subDropDown={item.subcategory ? true : false}
            >
              {item.subcategory &&
                item.subcategory.map((sitem) => (
                  <p className="font-dm text-sm font-normal text-secondaryGray">
                    {sitem.name}
                  </p>
                ))}
            </LeftSidebarItem>
          ))}
        </>
      )}
      {!drop && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSidebarItem
                title={item.name}
                subDropDown={item.subcategory ? true : false}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <p className="font-dm text-sm font-normal text-secondaryGray">
                      {sitem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                color={item.code}
                title={item.name}
                subDropDown={item.subcategory ? true : false}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <p className="font-dm text-sm font-normal text-secondaryGray">
                      {sitem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            ),
          )}
        </>
      )}
    </div>
  );
};

export default SidebarContent;
