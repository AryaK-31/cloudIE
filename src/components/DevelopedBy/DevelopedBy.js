import './DevelopedBy.css'
import arya from '../../Images/arya.webp'
import amb from '../../Images/amb.webp'
import khu from '../../Images/khu.webp'
import avi from '../../Images/avi.webp'

function DevelopedBy() {
    return (
        <div id="DevBy" className='bg-gradient-to-tr from-pink-600 via-black to-black'>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center p-4 gap-2'>
                <h1 className='text-white text-4xl font-bannerFont2 text-center'>Developer's Corner</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[10%]"></div>
            </div>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="main123">
                <div className='main456 md:flex md:gap-20'>
                    <div className="profile-card123 bg-gradient-to-t from-orange-600 via-pink-600 to-pink-800 ">
                        <div className="img123">
                            <img alt='img desc'className='img1234' src={arya} />
                        </div>
                        <div className="caption123 text-white">
                            <h3 className="h3123">Arya Kaslikar</h3>
                            <p className="p123">Front End Developer</p>
                            <div className="social-links123 text-white">
                                <a className="a123" 
                                    href="https://www.linkedin.com/in/arya-kaslikar-bb6957268/"><i className="fab fa-linkedin"></i>
                                </a>
                                <a className="a123"
                                    href="https://instagram.com/monsieur_ak31"><i className="fab fa-instagram"></i></a>
                                <a className="a123" href="mailto:aryakaslikar31@gmail.com"><i className="fas fa-at"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card123 bg-gradient-to-t from-orange-600 via-pink-600 to-pink-800">
                        <div className="img123">
                            <img alt='img desc'className='img1234 ' src={amb} />
                        </div>
                        <div className="caption123 text-white">
                            <h3 className="h3123">Ambarish Gadgil</h3>
                            <p className="p123">Front End Developer</p>
                            <div className="social-links123">
                                <a className="a123"
                                    href="https://www.linkedin.com/in/ambarish-gadgil-484b9a203/"><i className="fab fa-linkedin"></i></a>
                                <a className="a123"
                                    href="https://instagram.com/ambarish_gadgil">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="a123" href="mailto:ambarish.gadgil68@gmail.com "><i className="fas fa-at"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main456 md:flex md:gap-20'>
                    <div className="profile-card123 bg-gradient-to-t from-orange-600 via-pink-600 to-pink-800">
                        <div className="img123 ">
                            <img alt='img desc'className='img1234' src={khu} />
                        </div>
                        <div className="caption123 text-white">
                            <h3 className="h3123">Khush Kothari</h3>
                            <p className="p123">UI/UX Designer</p>
                            <div className="social-links123">
                                <a className="a123"
                                    href="https://www.linkedin.com/in/khush-kothari-6991b7213/">
                                    <i className="fab fa-linkedin"></i></a>
                                <a className="a123"
                                    href="https://instagram.com/khushkothari31
                                ">
                                    <i className="fab fa-instagram"></i></a>
                                <a className="a123" href="mailto:khusshkothari@gmail.com"><i className="fas fa-at"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="profile-card123 bg-gradient-to-t from-orange-600 via-pink-600 to-pink-800">
                        <div className="img123">
                            <img alt='img desc'className='img1234' src={avi} />
                        </div>
                        <div className="caption123 text-white">
                            <h3 className="h3123">Avikshit Kharkar</h3>
                            <p className="p123">Backend Developer</p>
                            <div className="social-links123">
                                <a className="a123"
                                    href="https://www.linkedin.com/in/avikshit-kharkar-2a8848214/">
                                    <i className="fab fa-linkedin"></i></a>
                                <a className="a123"
                                    href="https://instagram.com/avi_k2601 
                                "><i className="fab fa-instagram"></i></a>
                                <a className="a123" href="mailto:avikshitkharkar42@gmail.com avikshitkharkar42@gmail.com"><i className="fas fa-at"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DevelopedBy