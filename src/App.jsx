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
import About from "./pages/About";
import Contact from "./pages/Contact";



let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
      <Route path="/Products" element={<Shop/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contacts" element={<Contact/>}></Route>
    </Route>
  )
);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
