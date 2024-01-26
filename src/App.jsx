// import logo from "./assets/images/logo.png";
// import Image from "./components/layout/Image";
// import Flex from "./components/layout/Flex";
// import List from "./components/layout/List";
// import ListItems from "./components/layout/ListItems";
// import { HiMiniBars3CenterLeft } from "react-icons/hi2";
// import { useEffect, useState } from "react";

// import Navbar from "./components/layout/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";



let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Route>
  )
);


function App() {
  // const [showMenu, setShowMenu] = useState(true);
  // useEffect(()=>{
  //   const scrollWidth =()=>{
  //     // console.log(window.innerWidth);
  //     if(window.innerWidth < 768){
  //       // console.log('ami ekhon responsive');
  //       setShowMenu(false)
  //     }
  //     else{
  //       setShowMenu(true)
  //     }
  //   }
  //   scrollWidth()
  //   window.addEventListener('resize', scrollWidth)
  // }, [])

  return (
    <>
    <RouterProvider router={router} />
      {/* <nav>
        <div className="max-w-container mx-auto bg-red-500 p-2.5">
          <Flex className="md:flex ">
            <div className="w-4/12 ">
              <Image imgsrc={logo} />
            </div>
            <div className="md:w-8/12 w-full ">
              <HiMiniBars3CenterLeft
              onClick={()=>setShowMenu(!showMenu)}
                className="block md:hidden ml-auto absolute top-2 right-2 cursor-pointer"
              />
              {showMenu &&
              (
                <List className="md:flex text-center  mt-5 md:mt-0 font-dm text-sm font-normal gap-x-10">
                  <ListItems
                    className="text-black text-sm font-bold hover:font-bold my-1 lg:my-0"
                    listItems="Hello"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Shop"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="About"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Contacts"
                  />
                  <ListItems
                    className="text-black text-sm font-normal hover:font-bold my-1 lg:my-0"
                    listItems="Journal"
                  />
                </List>
              )}
            </div>
          </Flex>
        </div>
      </nav> */}
    </>
  );
}

export default App;
