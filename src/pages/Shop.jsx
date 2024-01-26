import React, { useState } from 'react'
import Container from '../components/layout/Container'
import Title from '../components/layout/Title'
import Breadcumb from '../components/layout/Breadcumb'
import { Link, useParams } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import Flex from '../components/layout/Flex';
import Pagination from '../components/layout/Pagination';
import LeftSidebar from '../components/layout/LeftSidebar';



const Shop = () => {
    const params = useParams()
    console.log(window.location.pathname.split('/')[1]);


     let [showNumber, setShowNumber] = useState(12)

    let handlePaginationChange =(e)=>{
      setShowNumber(e.target.value);
    }
  return (
    <div className='mt-32'> 
    <Container>
        <div className='mb-32'>
        <Title title='Products'/>
        <Breadcumb > <Link to='/'>Home</Link> <FaAngleRight /> {window.location.pathname.split('/')[1]}</Breadcumb>
        </div>

        <Flex className='flex justify-between gap-x-10'> 
        <div className='w-1/4'><LeftSidebar/></div>
        <div className='w-3/4 relative  '>

          <Flex className='md:flex gap-x-10'>

          <Flex className='flex items-center gap-x-3 '>
            <span className='text-secondaryGray'>Sort by: </span>
<select id="countries" class="md:w-[239px]  border border-gray text-secondaryGray rounded-lg focus:ring-blue-500 focus:border-black-500 block  p-2.5 text-base font-normal font-dm ">
  <option value='BD' className='text-base font-normal font-dm text-secondaryGray '>Bangladesh</option>
  <option value="US" className='text-base font-normal font-dm text-secondaryGray'>United States</option>
  <option value="CA" className='text-base font-normal font-dm text-secondaryGray'>Canada</option>
  <option value="FR" className='text-base font-normal font-dm text-secondaryGray'>France</option>
  <option value="DE" className='text-base font-normal font-dm text-secondaryGray'>Germany</option>
</select>

          </Flex>

          <Flex className='flex mt-3 md:mt-0 items-center gap-x-3 '>
            <span className='text-secondaryGray'>Show: </span>
<select onChange={handlePaginationChange} id="countries" class="md:w-[100px]  border border-gray text-secondaryGray rounded-lg focus:ring-blue-500 focus:border-black-500 block  p-2.5 text-base font-normal font-dm ">
  <option value="12" className='text-base font-normal font-dm text-secondaryGray'>12</option>
  <option value='42' className='text-base font-normal font-dm text-secondaryGray '>42</option>
  <option value="32" className='text-base font-normal font-dm text-secondaryGray'>32</option>
  <option value="24" className='text-base font-normal font-dm text-secondaryGray'>24</option>
  <option value="14" className='text-base font-normal font-dm text-secondaryGray'>14</option>
</select>

          </Flex>
          </Flex>
          <Pagination itemsPerPage={showNumber}/>
          
        </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Shop
