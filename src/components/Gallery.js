import React from "react";
import gallery1 from "../Images/gallery1.webp";
import gallery2 from "../Images/gallery2.webp";
import gallery3 from "../Images/gallery3.webp";
import gallery4 from "../Images/gallery4.webp";
import gallery5 from "../Images/gallery5.webp";
import gallery6 from "../Images/gallery6.webp";
import gallery7 from "../Images/gallery7.webp";
import gallery8 from "../Images/gallery8.webp";
import gallery9 from "../Images/gallery9.webp";
import gallery10 from "../Images/gallery10.webp";
import gallery11 from "../Images/gallery11.webp";
// ... import other images

const galleryData = [
  {
    backgroundImage: gallery1,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
    unHide: true
  },
  {
    backgroundImage: gallery2,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery3,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery4,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery5,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery6,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery7,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery8,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery9,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery10,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery11,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery2,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
];

function Gallery() {
  return (
    <div id="gallery" className="overflow-hidden h-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
      {galleryData.map((item, index) => (
        item.unHide ? <div key={index} className="flex justify-center items-center h-[25vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] w-full bg-pink-900">
          <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-4'>
            <h1  className='text-3xl lg:text-5xl font-semibold text-center mx-auto text-white font-bannerFont2'>
              Glimpses Of Events
            </h1>
            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[50%]"></div>
          </div>
        </div> :
          <div
            key={index} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300"
            className="relative bg-cover bg-center h-[25vh] md:h-[25vh] lg:h-[30vh] xl:h-[40vh] w-full"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#110e0e9d] opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-center ">
              <p className="text-white text-center mx-auto text-xl mt-[25%]">{item.title}</p>
              <p className="text-white text-center mx-auto text-xl mt-4">{item.venue}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Gallery;
