import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.webp'
import { Link } from 'react-scroll';

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
export default function Navbar() {
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState(false);

    const [showActivitesDropdown, setShowActivitesDropdown] = React.useState(false);

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('orange-400')
    const [bg, setBg] = useState('slate-800/60')
    const [border, setBorder] = useState('2')
    const [borderCol, setBorderCol] = useState('border-orange-600')
    const [type, setType] = useState('fixed')
    const [navLeft, setNavLeft] = useState(false)



    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setBg('#ff0054')
                setColor('#ff0054');
                setTextColor('white');
                setBorder('2')
                setType('fixed')
                setBorderCol('border-white')

            } else {
                setBorder('2')
                setBg('slate-800/60')
                setColor('transparent');
                setTextColor('orange-500');
                setType('static')
                setBorderCol('border-orange-600')

            }
        };

        window.addEventListener('scroll', changeColor, { passive: true });

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    useEffect(() => {
        const body = document.querySelector('body');
        if (nav) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, [nav]);

    const handleNav = () => {
        setNav(!nav)
        setType('static')
        if (navLeft) {
            setNav(!nav)
            setNavLeft(false)
        }

    }

    const handleAboutUsHover = () => {
        setShowAboutUsDropdown(true);
    };

    const handleAboutUsLeave = () => {
        setShowAboutUsDropdown(false);
    };

    const handleActivitiesHover = () => {
        setShowActivitesDropdown(true);
    };

    const handleActivitiesLeave = () => {
        setShowActivitesDropdown(false);
    };



    return (
        <>
            <div style={{ backgroundColor: `${color}`, transition: `background-color 0.3s ease`, position: `${type}` }} className={`z-[50] navbar text-white flex justify-between 2xl:px-20 2xl:py-8 lg:px-10 lg:py-4 font-bannerfont font-semibold text-lg md:static md:w-full `}>
                <ul className={`tagline border-${border} ${borderCol} bg-${bg}`}>
                    <h2 className={`tag 2xl:py-5 2xl:px-5 lg:px-2 lg:py-2 lg:text-base 2xl:text-xl text-${textColor}`}><span className='2xl:text-2xl lg:text-base'>--</span> Commit To Be Fit.</h2>
                    <GiHamburgerMenu onClick={handleNav} className={`icon lg:hidden text-2xl z-50`} />

                </ul>
                <ul className={`nav-items 2xl:text-xl lg:text-base flex 2xl:w-[36rem] lg:w-[35%]  bg-slate-900/60 text-white rounded-sm border border-1 ${borderCol}`} >
                    <li className='2xl:py-5 2xl:px-8 2xl:w-[9rem] lg:px-2 lg:py-2 lg:w-[25%] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100070} // Adjust the offset as needed
                            duration={700} // Adjust the duration of the scroll animation
                        >
                            Home

                        </Link>
                    </li>
                    <li
                        className='relative group 2xl:py-5 2xl:px-8 2xl:w-[9rem] lg:px-4 lg:py-2 lg:w-[25%] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'
                        onMouseEnter={handleAboutUsHover}
                        onMouseLeave={handleAboutUsLeave}
                    >

                        About Us
                        {showAboutUsDropdown && (
                            <div className='absolute font-thin text-orange-600 2xl:mt-5 lg:mt-3 bg-black p-2 shadow-md left-0 w-full'>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'>
                                    <Link
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-130} // Adjust the offset as needed
                                        duration={500} // Adjust the duration of the scroll animation
                                    >
                                        About

                                    </Link>
                                </li>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'><Link
                                    activeClass="active"
                                    to="Insights"
                                    spy={true}
                                    smooth={true}
                                    offset={-110} // Adjust the offset as needed
                                    duration={500} // Adjust the duration of the scroll animation
                                >
                                    Insights

                                </Link></li>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'><Link
                                    activeClass="active"
                                    to="DevBy"
                                    spy={true}
                                    smooth={true}
                                    offset={-140} // Adjust the offset as needed
                                    duration={700} // Adjust the duration of the scroll animation
                                >
                                    Developers
                                </Link></li>
                            </div>

                        )}
                    </li>
                    <li className='2xl:py-5 2xl:px-8 2xl:w-[9rem] lg:px-2 lg:py-2 lg:w-[25%] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>
                        <Link
                            activeClass="active"
                            to="gallery"
                            spy={true}
                            smooth={true}
                            offset={-130} // Adjust the offset as needed
                            duration={700} // Adjust the duration of the scroll animation
                        >
                            Gallery
                        </Link></li>
                    <li onMouseEnter={handleActivitiesHover}
                        onMouseLeave={handleActivitiesLeave} className='relative 2xl:py-5 2xl:px-8 2xl:w-[9rem] lg:px-2 lg:py-2 lg:w-[25%] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>Activities
                        {showActivitesDropdown && (
                            <div className='absolute font-thin text-orange-600 lg:mt-3 2xl:mt-5 bg-black p-2 shadow-md left-0 w-full'>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'><Link
                                    activeClass="active"
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-130} // Adjust the offset as needed
                                    duration={700} // Adjust the duration of the scroll animation
                                >
                                    Timeline
                                </Link></li>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'><Link
                                    activeClass="active"
                                    to="eventsPlanned"
                                    spy={true}
                                    smooth={true}
                                    offset={-150} // Adjust the offset as needed
                                    duration={700} // Adjust the duration of the scroll animation
                                >
                                    Event Planned
                                </Link></li>

                                <li className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium lg:text-xs 2xl:text-lg'><Link
                                    activeClass="active"
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-130} // Adjust the offset as needed
                                    duration={700} // Adjust the duration of the scroll animation
                                >
                                    PccoeOlympics
                                </Link></li>
                            </div>

                        )}
                    </li>
                </ul >

            </div >
            <div id="navForMobile" className={nav ? `overflow-auto mobile-nav lg:hidden fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100%] sm:w-[60%] flex flex-col justify-start gap-12 pt-20 items-center ease-in duration-300 bg-pink-700 z-[100000001] mobile-nav ` : `overflow-auto mobile-nav lg:hidden fixed top-0 left-[-100%] right-0 bottom-0 h-[100vh] w-[100%] flex flex-col justify-start gap-12 pt-20 items-center ease-in duration-300 bg-pink-700 z-[100000001] `}>
                <AiOutlineClose size={30} onClick={handleNav} className='icon lg:hidden text-white font-bold absolute top-[4%] right-[10%] z-[10000000]' />
                <img alt='img desc' className='h-[25%]' src={logo} />

                <ul className='text-white text-3xl sm:text-4xl flex flex-col gap-8 sm:gap-16 items-center justify-center font-bannerFont2'>
                    <li><Link onClick={handleNav}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100000} // Adjust the offset as needed
                        duration={10000} // Adjust the duration of the scroll animation
                    >
                        Home

                    </Link></li>
                    <li> <Link onClick={handleNav}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100} // Adjust the offset as needed
                        duration={1500} // Adjust the duration of the scroll animation
                    >
                        About Us

                    </Link></li>
                    <li><Link onClick={handleNav}
                        activeClass="active"
                        to="Insights"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset as needed
                        duration={1500} // Adjust the duration of the scroll animation
                    >
                        Insights

                    </Link></li>
                    <li><Link onClick={handleNav}
                        activeClass="active"
                        to="timeline"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset as needed
                        duration={1500} // Adjust the duration of the scroll animation
                    >
                        Activities

                    </Link></li>
                    <li><Link onClick={handleNav}
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-105} // Adjust the offset as needed
                        duration={1500} // Adjust the duration of the scroll animation
                    >
                        Gallery

                    </Link></li>


                </ul>
            </div>
        </>

    )
}
