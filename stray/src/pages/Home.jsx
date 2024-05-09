import React from 'react'
import {Hero} from '../categories/home/Hero'
import {Collections} from '../categories/home/Collections'
// import { Brands } from '../categories/home/Brands'
import { NewsLetter } from '../categories/home/NewsLetter'
import { AboutUsSection } from '../categories/home/AboutUsSection'
import { CapCollections } from '../categories/home/CapCollections'
import { NewArrivals } from '../categories/home/NewArrivals'
import { DeliveryFeatures } from '../categories/home/DeliveryFeatures'

export const Home = () => {
  return (
    <>
    <Hero />
    <Collections />
    <CapCollections />
    <NewArrivals />
    <AboutUsSection />
    <DeliveryFeatures />
   
    
    {/* <NewsLetter />  */}
    
    </>
  )
}

