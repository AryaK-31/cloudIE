import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Banner from './components/Banner';
import MainPage from './components/MainPage';
import Verify from './components/Verify';

function App() {

  const [user] = useAuthState(auth);
  React.useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {

    })

    return () => unsubscribe();

  } ,[])

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
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify" element={<Verify />} />
            <Route
              path="/mainpage"
              element={user ? <MainPage /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;