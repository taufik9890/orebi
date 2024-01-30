import React from "react";
import Container from "../components/layout/Container";
import Breadcumb from "../components/layout/Breadcumb";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";
import aboutImg from '../assets/images/aboutImg.png'
import Heading from "../components/layout/Heading";
import SmallerTitle from "../components/layout/SmallerTItle";
import SmallerText from "../components/layout/SmallerText";

const About = () => {
  return (
    <Container>
      <Breadcumb />
      <Flex className=' md:flex md:gap-x-10'>
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
            <Image className='w-full' imgsrc={aboutImg}/>
        </div>
        <div className="w-full md:w-1/2">
            <Image className='w-full' imgsrc={aboutImg}/>
        </div>
      </Flex>
      <div className="w-full my-14 md:my-28">
        <Heading className='text-lg md:text-[39px] font-dm font-bold text-primary md:leading-[52px]'  title='Orebi is one of the worlds leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'></Heading>
      </div>
      <Flex className='sm:flex gap-x-10 '>
        <div className="w-full sm:w-1/3 mb-8">
            <SmallerTitle title='Our Vision' className='mb-3'/>
            <SmallerText title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
        </div>
        <div className="w-full sm:w-1/3 mb-8">
            <SmallerTitle title='Our Story' className='mb-3'/>
            <SmallerText title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
        </div>
        <div className="w-full sm:w-1/3">
            <SmallerTitle title='Our Brands' className='mb-3'/>
            <SmallerText title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
        </div>
      </Flex>
    </Container>
  );
};

export default About;
