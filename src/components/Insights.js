import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

import carPic1 from "../Images/carouselPic1.webp";
import carPic2 from "../Images/carouselPic2.webp";
import carPic3 from "../Images/mangla.webp";
import carPic4 from "../Images/gadkari.webp";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { auth } from '../config/firebase'

function Insights() {
    const initialState = {
        name: '',
        experience: '',
        selectedYear: '',
    };

    const [data, setData] = useState([]);
    const collectionRef = collection(db, "Testimonials");
    const [formData, setFormData] = useState(initialState);

    const getReviewList = async () => {
        try {
            const data = await getDocs(collectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setData(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const onSubmit = async () => {
        try {
            await addDoc(collectionRef, {
                name: formData.name,
                review: formData.experience,
                year: formData.selectedYear
            });

            getReviewList();

            formData.experience = '';
            formData.selectedYear = '';
            formData.name = '';
        } catch (err) {
            console.error(err);
        }
    };

    const onDelete = async (id) => {
        const userDoc = doc(db, "Testimonials", id); // Use the correct collection name
        await deleteDoc(userDoc);
        getReviewList(); // Refresh the list after deleting
    };

    useEffect(() => {
        getReviewList();
    }, []);

    const id = auth?.currentUser?.displayName;
    // Data for the first carousel

    return (
        <div
            id="Insights"
            className="min-h-[130vh] md:min-h-[220vh] lg:min-h-[75vh] bg-gradient-to-br from-pink-700 via-black to-black py-10 px-4"
        >
            {/* First Carousel */}
            <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1300"
                className="flex flex-col items-center gap-3"
            >
                <h1 className="text-5xl text-center font-bannerFont2 text-white">Testimonials</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[7%]"></div>
            </div>
            <div className="lg:h-[50vh] h-[100vh] mt-8 flex flex-col gap-6 lg:gap-8 lg:flex-row justify-center">
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1300"
                    className="h-[45%] xl:h-[100%] w-full lg:w-[45%] "
                >
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="experience"
                            placeholder="Your Experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            cols="30"
                            rows="10"
                        ></textarea>
                        <div className="text-white text-2xl mt-10 flex gap-20 justify-center">
                            {['FY', 'SY', 'TY', 'BTech'].map((year) => (
                                <div className="flex items-center gap-2" key={year}>
                                    <label htmlFor={year}>{year}</label>
                                    <input
                                        type="radio"
                                        name="selectedYear"
                                        id={year}
                                        value={year}
                                        checked={formData.selectedYear === year}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))}
                        </div>
                            <button onClick={onSubmit} className="text-white mt-5 border-2 w-[20%]" type="submit ">Submit</button>

                    </form>
                </div>

                {/* Second Carousel */}
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1300"
                    className="h-[45%] xl:h-[70%] w-full lg:w-[45%] bg-[#FFE17B]"
                >
                    <Carousel slideInterval={1000000000} className="right-car border-8 border-[#FD8D14]">
                        {data.map((item, index) => (
                            <div key={index} className="flex h-full items-center justify-center">
                                <div className="text-white text-center w-[90%] md:w-[80%] 2xl:w-[70%]">
                                    <p className="text-xs md:text-xl lg:text-sm 2xl:text-lg font-bold">{item.review}</p>
                                    <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>

                                    <p className="mt-4 text-sm md:text-xl lg:text-base 2xl:text-lg">
                                        <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">{item.name},{item.year}</span>
                                    </p>

                                    <button onClick={() => onDelete(item.id)} className="text-white mt-5 border-2 w-[20%]" type="submit">Delete</button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Insights;
