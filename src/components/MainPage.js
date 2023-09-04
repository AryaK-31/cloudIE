import React from 'react'
import About from '../components/About';
import Announcement from '../components/Announcement';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Numbers from '../components/Numbers';
import EventPlanned from '../components/EventPlanned';
import Insights from '../components/Insights';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import DevelopedBy from '../components/DevelopedBy/DevelopedBy';

function MainPage() {
  return (
    <div id="container" className='relative'>
        
        <Banner />
        <Timeline />
        <About />
        <Numbers />
        <Insights />
        <EventPlanned />
        <Gallery />
        <DevelopedBy />
        <Footer />
        <Announcement /> 

      </div>
  )
}

export default MainPage