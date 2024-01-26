import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default RootLayout
