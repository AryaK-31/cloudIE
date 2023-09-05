import { Carousel } from "flowbite-react";

import carPic1 from "../Images/carouselPic1.webp"
import carPic2 from "../Images/carouselPic2.webp"
import carPic3 from "../Images/mangla.webp"
import carPic4 from "../Images/gadkari.webp"
import am from "../Images/am.webp";
import tp from "../Images/tp.webp";
import kt from "../Images/kt.webp";


function Insights() {
    return (
        <div id="Insights" className="min-h-[130vh] md:min-h-[220vh] lg:min-h-[90vh] bg-gradient-to-br from-pink-700 via-black to-black py-10 px-4">
            <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col items-center gap-3">
                <h1 className="text-5xl text-center font-bannerFont2 text-white">Insights</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[5%]"></div>
            </div>
            <div className="lg:h-[60vh] h-[100vh] mt-8 flex flex-col gap-6 lg:gap-8 lg:flex-row justify-center">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="h-[45%] xl:h-[100%] w-full lg:w-[45%] ">
                    
                    <Carousel slideInterval={2000}>
                        <div
                            className="h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${carPic1})` }}
                        ></div>
                        <div
                            className="h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${carPic2})` }}
                        ></div>
                        <div
                            className=" h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${carPic3})` }}
                        ></div>
                        <div
                            className=" h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${carPic4})` }}
                        ></div>
                    </Carousel>
                </div>

                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="h-[45%] xl:h-[100%] w-full lg:w-[45%] bg-[#FFE17B]">
                    <Carousel slideInterval={1000000000} className="right-car border-8 border-[#FD8D14] ">
                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[90%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl lg:text-sm 2xl:text-lg font-bold">
                                    “Embrace the rhythm of your heartbeat and the energy within. At the Fitness First Festival, we celebrate not only physical strength but the power of determination and the joy of a healthier life.”
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] 2xl:h-[120px] 2xl:w-[120px] lg:w-[100px] ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${tp})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-xl lg:text-base 2xl:text-lg">
                                    <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Tirtesh P,</span> Participant
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[70%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl lg:text-sm font-bold 2xl:text-lg">
                                    Don't wait until you've reached your goal to be proud of yourself. Be proud of every step you take toward reaching that goal.
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px]  bg-red-700 ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${am})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-xl lg:text-base 2xl:text-lg">
                                    <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Asmita M,</span> Organizer.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[90%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl font-bold lg:text-sm 2xl:text-lg">
                                    “Embracing and nurturing our physical fitness isn't solely pivotal for cultivating a sound and thriving physique, but it fundamentally underpins the bedrock of vibrant, inventive, and cerebral engagements.”
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px] bg-red-700 ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${kt})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-x lg:text-base 2xl:text-lg">
                                        <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Kartik T,</span> Participant</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>


        </div>
    );
}

export default Insights;
