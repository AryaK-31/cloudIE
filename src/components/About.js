import React from 'react'
import bg from '../Images/bg-img.webp'
import logo from '../Images/logo.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function About() {
    return (
        <div id='about' className='about relative h-[210vh] md:h-[110vh] lg:h-[130vh] 2xl:h-[110vh] w-full overflow-hidden bg-gray-800 text-white bg-cover bg-center ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-black/70 to-black/20 lg:to-black/60' />
            <img alt='img desc' className='absolute h-[220px] top-[8%] translate-x-[-50%] md:translate-x-0 left-[50%]
            md:absolute lg:absolute lg:left-[75%] lg:top-[20%] lg:h-[200px] md:left-[65%] md:top-[15%] md:h-[180px] sm:h-[120px] sm:right-[30%] sm:top-[20%]  2xl:h-[350px] 2xl:top-[15%]' src={logo} />
            <h1 data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='absolute left-4 top-4 font-headingText text-2xl lg:text-2xl md:text-2xl sm:text-xl 2xl:text-4xl'>#<span className='text-orange-600 lg:text-2xl md:text-2xl 2xl:text-4xl'>Fitness</span><span className='text-white lg:text-2xl md:text-2xl 2xl:text-4xl'>First</span><span className='text-green-600 lg:text-2xl md:text-2xl 2xl:text-4xl'>Festival</span></h1>
            <div className="about-details absolute top-[30%] md:top-[15%] lg:top-[20%] left-[6%] w-[90%] md:w-[65%] lg:w-[65%] sm:w-[50%] 2xl:top-[20%]">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col gap-2 2xl:gap-6 '>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className='text-orange-600 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl '>Fit.</span></h1>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className=''>St<span className='text-blue-500 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>ro</span>ng.</span></h1>
                    <h1 className='font-aboutFont text-[2.5rem] font-semibold 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Be <span className='text-green-600 2xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl'>Enthusiastic.</span></h1>
                    <p className='text-base font-bannerfont mt-4 lg:text-base 2xl:text-xl md:text-xl sm:mt-8 md:mt-10 lg:mt-0 sm:text-xs'>PCCOE Welcomes you to its Fitness First Festival 2023-2024</p>
                    <h1 className='text-6xl font-bannerfont mt-10 md:mt-0'>~</h1>
                </div>
                <p data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='max-w-2xl text-base font-bannerfont text-white lg:text-base 2xl:text-xl md:text-2xl sm:text-xs mt-20 md:mt-10 lg:mt-0' >Pimpri Chinchwad College of Engineering (PCCoE) acknowledges that future professionals will face various work-related challenges like performance pressure, long hours, sedentary lifestyles, and mental stress. Handling these demands while progressing in one's career requires efficient strategies. Without proper health management, earnings lose significance. Thus, mastering stress reduction through physical and mental workouts, especially during student years, becomes vital.<br/><br/>
                    To equip students with skills to excel under pressure and manage stress, PCCoE introduces the "PCCoE Fitness First Festival Year 2023-24." This year-long event (July 1, 2023 - June 30, 2024) will offer fitness-related activities exclusively for students, staff, and faculty. The festival's objective is to instill a passion for maintaining physical and mental well-being, enabling participants to overcome life's challenges.
                    The inauguration of the "PCCoE Fitness First Festival Year 2023-24" took place on June 29, 2023, with <span className='font-bold text-orange-500'>Shri. Nitin Gadkariji, Union Minister of Road Transport.</span></p>
            </div>
        </div>
    )
}

export default About
