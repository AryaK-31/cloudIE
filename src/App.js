import './App.css';
import React from 'react';

import Intro from './components/Intro';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';

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

        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;