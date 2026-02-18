import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Home/Video'
import Hero from '../components/Home/Hero'
import Countdown from '../components/Home/CountDown'
import EventsGallery from '../components/Home/Events'

const Home = () => {
  return (
    <div className='relative'>
      
      <Video />
      <Hero />
      <Countdown />
      <EventsGallery />
    </div>
  )
}

export default Home