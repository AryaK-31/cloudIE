import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../Images/logo.png'

function Footer() {
    return (
        <div id='footer' className="h-full md:h-[75vh] md:pt-16 lg:h-[60vh] xl:h-[50vh] 2xl:[40vh] w-full text-white bg-black flex flex-col  lg:flex-row justify-start lg:justify-around gap-10 p-4 items-start px-6 lg:px-0 2xl:pt-16 lg:pt-8 ">
            <div className="text-xl md:flex md:items-start md:gap-10 md:text-3xl md:w-full md:justify-center lg:justify-around lg:w-[100%] lg:h-full lg:text-2xl  2xl:text-4xl">
                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" id="footerlogosec" className="w-full h-fit  text-white flex flex-col gap-8  lg:gap-4 2xl:gap-8 md:items-center lg:items-start">
                    <div className="heading tracking-widest w-full justify-center items-center flex flex-row md:flex-row md:gap-4 lg:flex-col lg:gap-0 gap-2">
                        <img alt='img desc' id="footerlogo" className="h-52 lg:h-[150px] 2xl:h-[220px]" src={logo} />
                    </div>
                    <div id="footericons"  className="flex gap-3 text-2xl 2xl:text-2xl lg:text-lg items-center justify-center w-full">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div id="footercopyright" className="w-full text-base 2xl:text-base lg:text-xs text-orange-500 text-center lg:p-2 2xl:p-4">
                        @2023 by PCCOE Powered and secured by GoDev
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="w-full h-fit flex flex-col gap-10 mt-4 md:mt-0 md:items-center lg:items-start">
                    <h2 id="footeroprn" className="uppercase text-xl 2xl:text-xl lg:text-base font-bold tracking-widest text-pink-600 ">
                        Days Of Operation
                    </h2>
                    <div id="footerweekly" className="text-[17px] 2xl:text-[17px] lg:text-[14px]   tracking-wide">
                        <p>Mon-Fri: Weekly Activities</p>
                        <p>Non-Working Sat: Surprise Activities</p>
                        <p>Sun: Closed</p>
                    </div>
                    <button id="footer_register_btn" className="py-3 2xl:py-3 lg:py-1 lg:mt-0 mt-4 px-8 2xl:px-8 lg:px-4 border border-1 border-pink-600 text-white text-2xl 2xl:text-2xl lg:text-lg font-bold tracking-widest hover:bg-pink-600 hover:text-white transistion duration-500">Register</button>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="text-xl md:flex md:items-center md:gap-10 md:text-3xl md:w-full md:justify-center lg:w-[100%] lg:h-full lg:justify-center lg:gap-[70px] lg:text-2xl 2xl:gap-56 2xl:text-4xl ">
                <div id="footercontact" className="w-full h-full 2xl:w-[32%] lg:w-[40%] gap-10 2xl:gap-10  lg:gap-4 flex flex-col md:items-center lg:items-start">
                    <h2 className="uppercase text-xl 2xl:text-xl lg:text-base font-bold tracking-widest text-pink-600">
                        contact us
                    </h2>
                    <div className="text-[17px] 2xl:text-[17px] lg:text-[14px] tracking-wide">
                        <p>Sector -26, Pradhikaran, Nigdi,</p>
                        <p>Near Akurdi Railway Station,</p>
                        <p>Pune - 411 044.</p>
                    </div>
                    <div className="text-[17px] 2xl:text-[17px] lg:text-[14px] tracking-wide">
                        <p>Mail: pccoeadmin@gmail.com </p>
                        <p>Contact: +91 8087174347</p>
                    </div>
                </div>
                <div className="w-full h-full lg:w-[32%] flex flex-col md:items-center md:justify-start lg:items-start">
                    <h2 className="uppercase text-xl 2xl:text-xl lg:text-base mt-6 md:mt-0 font-bold tracking-widest text-pink-600">
                        menu
                    </h2>
                    <ul className="list-square text-[17px] 2xl:text-[17px] lg:text-[14px] marker:text-pink-600 pl-6 lg:pl-6 cursor-pointer">
                        <li className=" hover:text-gray-300">Home</li>
                        <li className=" hover:text-gray-300">About</li>
                        <li className=" hover:text-gray-300">Gallery</li>
                        <li className=" hover:text-gray-300">Activities</li>
                        <li className=" hover:text-gray-300">Contact</li>
                    </ul>
                   

                </div>

            </div>


        </div>
    );
}

export default Footer;