import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Home/Video'
import Hero from '../components/Home/Hero'
import Countdown from '../components/Home/CountDown'
import EventsGallery from '../components/Home/Events'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='relative'>
      
      <Video />
      <Hero />
      <Countdown />
      <EventsGallery />
      <Footer />
    </div>
  )
}

export default Home