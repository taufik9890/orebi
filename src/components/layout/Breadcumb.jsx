import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const Breadcumb = () => {
  
  const params = useParams();
  console.log(window.location.pathname.split("/")[1]);
  return (
    <div className="my-28">
      <h1 className='font-dm font-bold text-5xl text-primary '>{window.location.pathname.split("/")[1]}</h1>
      <p className="mt-3 flex items-center gap-x-1 font-dm text-sm font-normal text-secondaryGray">
        {" "}
        <Link to="/">Home</Link> <FaAngleRight />{" "}
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default Breadcumb;
