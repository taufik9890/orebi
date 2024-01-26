import React from 'react'
import Container from './Container'
import Image from './Image'
import Banner2 from '../../assets/images/banner2.jpg'
import { Link } from 'react-router-dom'

const BannerTwo = () => {
  return (
    <div className='md:mt-32 mt-8'>
    <Container>
        <Link to='#'>
        <Image className='w-full' imgsrc={Banner2}/>
        </Link>
    </Container>
    </div>
  )
}

export default BannerTwo
