import React from 'react'
import Banner from '../components/layout/Banner'
import BannerBotton from '../components/layout/BannerBotton'
import Advertise from '../components/layout/Advertise'
import NewArrival from '../components/layout/NewArrival'
import BestSeller from '../components/layout/BestSeller'
import BannerTwo from '../components/layout/BannerTwo'
import Offers from '../components/layout/Offers'

const Home = () => {
  return (
    <>
    <Banner/>  
    <BannerBotton/>
    <Advertise/>
    <NewArrival/>
    <BestSeller/>
    <BannerTwo/>
    <Offers/>
    </>
  )
}

export default Home
