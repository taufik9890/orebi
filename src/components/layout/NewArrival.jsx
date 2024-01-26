import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Image from './Image'
import newArr1 from '../../assets/images/newArr1.png'
import Product from './Product'
import { FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";




const NewArrival = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      > Hello</div>
    );
  }

    const settings = {
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
      nextArrow: <SampleNextArrow />,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='mt-32'>
    <Container>
      <Heading title='New Arrivals'/>
      {/* <Flex className='flex mt-12 gap-x-10'>  */}
      <Slider  {...settings} >
        <div className='w-1/4  '>
          <Product src={newArr1} badge={true} title='10%'/>
        </div>
        <div className='w-1/4 '>
          <Product src={newArr1} badge={true} title='New'/>
        </div>
        <div className='w-1/4 '>
          <Product src={newArr1} badge={true} title='Notun'/>
        </div>
        <div className='w-1/4 '>
          <Product src={newArr1} badge={true} title='Notun'/>
        </div>
        </Slider>
      {/* </Flex> */}
    </Container>
    </div>
  )
}

export default NewArrival
