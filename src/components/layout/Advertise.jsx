import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Image from './Image'
import Ad_1 from '../../assets/images/Ad_1.jpg'
import Ad_2 from '../../assets/images/Ad_2.jpg'
import Ad_3 from '../../assets/images/Ad_3.jpg'
const Advertise = () => {
  return (
    <div className='md:mt-36 mt-6'>
        <Container>
            <Flex className='flex gap-x-3 md:gap-x-10'>
                <div className='w-1/2'>
                <Link to='#'>
                <Image  imgsrc={Ad_1}/>
                </Link>
                </div>
                <div className='w-1/2  '>
                    <div className='mb-3 md:mb-10'>
                    <Link  to='#'>
                    <Image imgsrc={Ad_2}/>
                    </Link>

                    </div>
                    <Link to='#'>
                    <Image imgsrc={Ad_3}/>
                    </Link>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertise
