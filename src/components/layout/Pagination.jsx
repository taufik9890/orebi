
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import newArr1 from '../../assets/images/newArr1.png'

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
];

function Items({ currentItems }) {
  return (
    <>
    {currentItems && currentItems.map((item, index) => (
      <div key={index} className='md:w-1/2 lg:w-1/3'>
      <Product src={newArr1} badge={true} title='New'/>
      </div>
    ))}
    </>
  )
}
 

const Pagination = ({ itemsPerPage }) => {

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



  return (
    <>
    <div className='md:flex flex-wrap justify-between'>

    <Items  currentItems={currentItems} />
    </div>
    <ReactPaginate
      breakLabel="..."
      breakClassName="mb-0"
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel=""
      renderOnZeroPageCount={null}
      previousClassName="hidden"
      nextClassName="hidden"
      nextLinkClassName="page-link"
      pageClassName="h-9 w-9 border border-solid border-gray leading-9 text-center "
      pageLinkClassName="page-link"
      containerClassName="flex flex-wrap gap-x-2 gap-y-2 md:gap-y-0 md:gap-x-4  mt-12"
      activeClassName="bg-primary text-white"
    />
    <p className='md:absolute lg:bottom-0 lg:right-0 mt-2 lg:mt-0 text-sm font-dm text-secondary'>Products from {itemOffset} to {endOffset} of {items.length}</p>
  </>
  )
}

export default Pagination
