import React from "react";
import sat1 from "../Images/sat1.webp";
import sat2 from "../Images/sat2.webp";
import sat3 from "../Images/sat3.webp";
import cricket from "../Images/cricket.webp";
import football from "../Images/football.webp";
import volleyball from "../Images/volleyball.webp"
import basketball from "../Images/basketball.webp"
import khokho from "../Images/khokho.webp"
import kabaddi from "../Images/kabaddi.webp"
import handball from "../Images/handball.webp"
import tabletennis from "../Images/tabletennis.webp"
import chess from "../Images/chess.webp"
import badminton from "../Images/badminton.webp"
import carrom from "../Images/carrom.webp"
import zumba from "../Images/zumba.webp"
import yoga from "../Images/yoga.webp"
import sportsclub from "../Images/sportsclub.webp"

import { Carousel } from "flowbite-react";
export default function EventPlanned() {
  return (
    <div id="eventsPlanned" className="overflow-hidden  h-[auto] w-full bg-gradient-to-br from-pink-900 via-black to-black py-4">
      <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col items-center gap-4">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center mx-auto text-white">
          what are the EVENTS PLANNED ?
        </h1>
        <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
      </div>
      <div className="grid grid-rows-3 gap-5 lg:px-6 py-4 lg:py-28">
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[60vh] md:h-[100vh] lg:h-[60vh] w-full">
          <div className="relative">
            <div className="h-80 w-full md:h-full xl:h-full">
              <Carousel slideInterval={2000} className="p-2 h-full w-full">
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sat1})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Healthy Life

                  </div>
                </div>
                <div
                  className="relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sat2})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Trekking

                  </div>
                </div>
                <div
                  className="relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sat3})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Healthy Food

                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16">
            <h1 className="lg:text-4xl text-4xl text-white">
              Surprise{" "}
              <span className="lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase">
                Saturdays
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-white">
              " Get ready to make your Saturdays even more special! We've
              planned exciting surprise activities for every working Saturday.
              Join us for fun-filled moments and memorable experiences that will
              make your weekends unforgettable! ".
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1300" className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-full">
          <div className="order-2 lg:order-first p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16">
            <h1 className="g:text-4xl text-4xl text-white">
              PCCOE{" "}
              <span className="lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase">
                olympics
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-white">
              " Get ready for an extraordinary sporting extravaganza! The PCCoE
              Olympics proudly presents a thrilling Multi-Sport Event, organized
              by the PCCoE Olympic Committee, open to all students and staff.
              Let's come together to celebrate sportsmanship, unity, and the joy
              of competition! ".
            </p>
          </div>
          <div className="bg-cover bg-center order-1 w-full h-80 md:h-full xl:h-full">
            <Carousel slideInterval={2000} className="p-2 h-full w-full">
                <div
                  className=" relative h-full w-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${cricket})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Cricket

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${football})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Football

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${volleyball})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Volleyball

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${basketball})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      BasketBall

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${khokho})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Kho-Kho

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${kabaddi})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Kabaddi

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${handball})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Handball

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${tabletennis})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Table Tennis

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${chess})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Chess

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${badminton})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Badminton

                  </div>
                </div>
                <div
                  className=" relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${carrom})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Carrom

                  </div></div>                
              </Carousel>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-full">
          <div className="lg:order-last p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16">
            <h1 className="g:text-4xl text-4xl text-white">
              Weekly{" "}
              <span className="lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase">
                Activities
              </span>
            </h1>
            <p className="max-w-2xl text-lg font-medium text-white">
              " Embrace a week of wellness and energy! Join us for a dynamic
              lineup of activities, including invigorating yoga sessions,
              electrifying Zumba classes, and engaging sports club activities.
              Get ready to rejuvenate your body and spirit through a diverse
              range of weekly offerings! "
            </p>
          </div>
          <div className="order-first bg-cover bg-center w-full h-80 md:h-full xl:h-full">
          <Carousel slideInterval={2000} className="p-2 h-full w-full">
                <div
                  className="h-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${zumba})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Mon & Fri: Zumba

                  </div>
                </div>
                <div
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${yoga})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                     Wed: Yoga

                  </div>
                </div>
                <div
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sportsclub})` }}
                >
                  <div className="absolute top-1 left-2  text-white tracking-wider font-semibold text-xl">
                      Tue & Thurs: Student Sports Club Activities
                  </div>
                </div>
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}