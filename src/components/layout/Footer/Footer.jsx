import React from "react";
import Flex from "../Flex";
import Footerheader from "./Footerheader";
import { helpData } from "./helpData";
import { shopData } from "./shopData";
import Image from "../Image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Container from '../Container'
import footerLogo from '../../../assets/images/footerLogo.png'
const Footer = () => {
  return (
    <>
      <div className="bg-primaryBg pt-[55px] mt-24">
            <Container>
          <Flex className='flex flex-wrap gap-y-6 md:gap-y-0'>
            <div className="w-1/2 md:w-[13%] lg:w-[10%]">
              <div className="mb-4">
                <Footerheader title="Menu" />
              </div>
              {helpData.map((item, i) => (
                <div links={item.link} key={i}>
                  <h5 className="font-dm mb-2 text-sm font-normal text-secondary">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
            <div className="w-1/2 md:w-[13%] lg:w-[10%]">
              <div className="mb-4">
                <Footerheader title="Shop" />
              </div>
              {shopData.map((item, i) => (
                <div links={item.link} key={i}>
                  <h5 className="font-dm mb-2 text-sm font-normal text-secondary">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
            <div className="w-1/2  md:w-[13%] lg:w-[10%]">
              <div className="mb-4">
                <Footerheader title="Help" />
              </div>
              {helpData.map((item, i) => (
                <div links={item.link} key={i}>
                  <h5 className="font-dm mb-2 text-sm font-normal text-secondary">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
            <div className="w-1/2 md:w-[295px] lg:w-[445px] xl:w-[645px] md:pl-[60px] lg:pl-[145px] md:pr-[156px] lg:pr-[256px]">
              <h4 className='text-sm font-dm font-bold text-primary'>(052) 611-5711 company@domain.com</h4>
              <p className="font-dm mt-3 text-sm font-normal text-secondary">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div></div>
            <Image
              imgsrc={footerLogo}
              className="h-[29px] w-[122px]"
            />
          </Flex>
          <Flex className="md:flex  items-center justify-between py-16">
            <Flex className="flex w-[100px] items-center justify-between">
              <FaFacebookF />
              <FaLinkedinIn />
              <BsInstagram />
            </Flex>
            <p className="mt-5 md:mt-0 font-dm text-sm font-normal text-secondary ">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </Flex>
          </Container>
      </div>
    </>
  );
};

export default Footer;
