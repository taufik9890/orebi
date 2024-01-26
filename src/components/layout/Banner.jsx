import React, { useState } from 'react'

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './Image';
import banner from '../../assets/images/banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {

  const [dotActive ,setDotActive] = useState(0)
    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              appendDots: dots => (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    textAlign: 'start',
                    transform: 'translateY(-50%)',
                    left: '2%'
                  }}
                >
                  
                  <ul className='List' style={{ margin: "0px", display: 'flex',
                flexDirection: 'column' }}> {dots} <li style={{display: 'inline-block'}}></li>  </ul>
                </div>
              ),
              customPaging: i => (
                <div
                style={i === dotActive ? 
                  {width: "30px",
                  color: "#262626",
                  borderRight: "3px #262626 solid",
                  display: 'inline-block',
                  fontSize: '12px'
                } : 
                {
                  width: "30px",
                  color: "black",
                  borderRight: "3px transparent solid",
                  display: 'block',
                  fontSize: '12px'
                }
                }
                >
                  0{i + 1}
                </div>
              )
            }
          },
        ],
        beforeChange: (prev, next) => {
          setDotActive(next );
        },
        appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                textAlign: 'start',
                transform: 'translateY(-50%)',
                left: '6%'
              }}
            >
              
              <ul style={{ margin: "0px",
            flexDirection: 'column' }}> {dots} <li style={{display: 'block'}}></li>  </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={i === dotActive ? 
              {width: "30px",
              color: "#262626",
              borderRight: "3px #262626 solid",
              display: 'inline-block',
              padding: '10px 0'} : 
            {
              width: "30px",
              color: "black",
              borderRight: "3px transparent solid",
              display: 'block',
              padding: '10px 0'}
            }
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <div >
       <Slider {...settings}>
        <Link to='#'>
        <div className='w-full'>
            <Image className='w-full'  imgsrc={banner}/>
          </div>
        </Link>
        <Link to='#'>
        <div className=''>
            <Image className='w-full'  imgsrc={banner}/>
          </div>
        </Link>
        <Link to='#'>
        <div className=''>
            <Image className='w-full'  imgsrc={banner}/>
          </div>
        </Link>
        </Slider>
    </div>
  )
}

export default Banner
