import React from 'react';
import nd from '../Images/nd.png'
import st from '../Images/st.png'
import ag from '../Images/ag.png'
import sb from '../Images/sb.png'
import ss from '../Images/ss.png'
import kk from '../Images/kk.png'
import nc from '../Images/nc.png'

const teamMembers = [
    {
        name: 'Dr. Nilkanth Chopade',
        imageUrl: nc,
    },
    {
        name: 'Dr. Sheetal Bhandari',
        imageUrl: sb,
    },
    {
        name: 'Dr. Sudeep Thepade',
        imageUrl: st,
    },
    {
        name: 'Dr. Swati Shinde',
        imageUrl: ss,
    },
    {
        name: 'Dr. Narendra Deore',
        imageUrl: nd,
    },
    {
        name: 'Dr. Ajay Gaikwad',
        imageUrl: ag,
    },
    {
        name: 'Dr. Kishor Kinage',
        imageUrl: kk,
        margin: true
    },

];

function Team() {
    return (
        <div className='w-full bg-gradient-to-b to-black via-pink-700 from-black pb-16'>
            <div className="flex items-start justify-center min-h-screen w-full">
                <div className="flex flex-col w-full gap-24">
                    <div className="flex flex-col mt-0 w-full">
                        <div className="container max-w-full px-4 ">
                            <div className="flex flex-wrap justify-center text-center mb-24">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col items-center gap-2">
                                        <h1 className="text-5xl text-center font-bannerFont2 text-white">The Taskforce</h1>
                                        <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[20%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:justify-center flex-wrap gap-16">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className={`w-full ${member.margin ? 'md:mx-auto lg:mx-0' : ''} md:w-[45%] lg:w-[20%] mb-6 px-6 sm:px-6 lg:px-4`}>
                                        <div className="flex flex-col">
                                            <a href="#" className="mx-auto">
                                                <img className="rounded-full border-4 border-orange-500 bg-white drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src={member.imageUrl}
                                                    alt={`Team member ${index}`}
                                                />
                                            </a>
                                            <div className="text-center mt-6">
                                                <h1 className="text-white text-xl font-bold mb-1">
                                                    {member.name}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
