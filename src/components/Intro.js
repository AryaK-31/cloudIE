import React, { useState, useEffect } from 'react';
import intro from '../Videos/intro.mp4';
import intro_rotated from '../Videos/mobile_1.mp4';
import { Link } from 'react-router-dom';
import { BiSolidVolumeMute } from 'react-icons/bi';
import { BiSolidVolumeFull } from 'react-icons/bi';


function Intro() {
  const [isMuted, setIsMuted] = useState('false');
  const [soundIcon, setSoundIcon] = useState('false');

  const toggleMute = () => {
    const video = document.getElementById('intro-vid');
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };


  return (
    <>
      {
        window.innerWidth < 850 ? <div id="intro-frame" className='relative h-[90vh] w-full'>
          <video
            id='intro-vid'
            autoPlay
            loop
            muted={isMuted} // Use the state variable to control muting
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <source src={intro_rotated} type="video/mp4" />
          </video>

          <button
            onClick={toggleMute}
            className='hidden lg:block live-glow absolute z-10 text-white left-10 border-white border-2 px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300 bottom-10 text-2xl'
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          <Link to='/mainpage'>
            <button
              className='live-glow absolute z-10 text-white right-10 border-white border-2 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 bottom-10 text-xl'
            >
              Skip Intro
            </button>
          </Link>
        </div> : <div id="intro-frame" className='relative h-screen w-full'>
          <video
            id='intro-vid'
            autoPlay
            muted={isMuted}
            playsInline
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <source src={intro} type="video/mp4" />
          </video>
          <button
            onClick={toggleMute}
            className='live-glow absolute z-10 text-white left-10 border-white border-2 px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300 bottom-10 text-2xl'
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          <Link to='/mainpage'>
            <button
              className='live-glow absolute z-10 text-white right-10 border-white border-2 px-8 py-2 hover:bg-white hover:text-black transition-colors duration-300 bottom-10 lg:text-2xl'
            >
              Skip Intro
            </button>
          </Link>
        </div>
      }

    </>
  );
}

export default Intro;
