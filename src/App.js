import './App.css';
import React from 'react';
import About from './components/About';
import Announcement from './components/Announcement';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Numbers from './components/Numbers';
import EventPlanned from './components/EventPlanned';
import TaskForce from './components/Taskforce';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import DevelopedBy from './components/DevelopedBy/DevelopedBy';
import Team from "./components/TeamMembers";


function App() {


  return (
    
    <>
      <div id="lock" className='h-screen text-center w-full p-4 bg-black text-white text-xl'>

        <div className='mt-[18%]'>
          The website is available only on Portrait Mode!
          <br />
          ⚠️The Backend and few components are still under development. <br />
          Thank You For your Patience.
        </div>
      </div>
      <div id="container" className='relative'>

        <Banner />
        <About />
        <Numbers />
        <TaskForce />
        <Team />
        <Timeline />
        <EventPlanned />
        <Gallery />
        <DevelopedBy />
        <Footer />
        <Announcement />

      </div>
    </>

  );
}

export default App;