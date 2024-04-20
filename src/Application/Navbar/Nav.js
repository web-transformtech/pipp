import { useEffect, useState } from 'react';
import './assets/css/nav.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { HiChevronDown } from 'react-icons/hi';
import Logo from './assets/images/PIPP FINAL LOGO.webp';
export default function Nav(props) {
    const [mobilenav, setMobilenav] = useState(false);
    function mobnav() {
        setMobilenav(!mobilenav);
    }
    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
            }
        });
    }, []);
    mobilenav ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    return (
        <>
            <div className="h-9 pr-[100px] flex justify-end space-x-5 text-[22px] sm:text-[18px] items-center text-whitetext  bg-gradient-to-r from-primary to-secondary">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <AiFillYoutube className="text-[26px] sm:text-[20px]" />
                </a>
                <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className="" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <AiFillFacebook className="" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <FaSquareXTwitter className="" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <AiFillInstagram className="text-[24px] sm:text-[20px]" />
                </a>
            </div>
            <div className="flex items-center justify-center pt-3 pb-3 ">
                {/* <img
          src={Logo}
          loading="lazy"
          alt="Padmavathi Institute of Public Policy"
          className="lg:h-full sm:h-[50px] mdsm:h-[70px]"
        /> */}
                <LazyLoadImage
                    src={Logo}
                    draggable="false"
                    // width="93"
                    // height="118"
                    alt="Padmavathi Institute of Public Policy"
                    className="lg:h-full sm:h-[50px] mdsm:h-[70px]"
                />
                <h1 className="text-primary lg:blcok lge:block sm:hidden md:hidden mdsm:hidden font-Lato font-extrabold mx-3 lg:text-[30px] lge:text-[30px] sm:text-[15px] mdsm:text-[25px]">
                    Padmavathi Institute of Public Policy
                </h1>
                <h1 className="text-primary lg:hidden lge:hidden font-Lato font-extrabold mx-3 lg:text-[30px] lge:text-[30px] sm:text-[25px] mdsm:text-[25px] ">
                    PIPP
                </h1>
            </div>
            <div className={`${mobilenav ? `absolute bg-[#000000af] h-full transform transition-all ease-in-out duration-500` : ''}`}>
                <div className="relative">
                    {/* <div className={`${mobilenav ? "bg-primary h-full" : ""}`}> */}
                    <div className="absolute w-[100%] z-[999]">
                        <div className="lg:hidden lge:hidden absolute sm:-top-[45%] mdsm:-top-[35%] right-4">
                            <div
                                onClick={() => {
                                    mobnav();
                                }}
                                className="menu-btn"
                            >
                                <div className="menu-btn__burger"></div>
                            </div>
                        </div>
                        <div className={``}>
                            <ul
                                className={`${
                                    window.innerWidth <= 1023
                                        ? `bg-gradient-to-r from-primary to-secondary px-2 pb-6 absolute w-full text-whitetext justify-center space-y-6 text-h6 font-Poppins font-semibold lg:hidden lge:hidden transform transition-all ease-in-out duration-500 ${
                                              mobilenav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                                          }`
                                        : window.innerWidth >= 1023 &&
                                          `lg:flex lge:flex text-whitetext justify-center space-y-8 text-h6 font-Poppins font-semibold sm:hidden md:hidden mdsm:hidden`
                                }`}
                            >
                                {/* <ul
            className={`${
              mobilenav
                ? `bg-gradient-to-r from-primary to-secondary absolute w-full text-whitetext justify-center space-y-6 text-h6 font-Poppins font-semibold lg:hidden lge:hidden transform transition-all ease-in-out duration-500 ${
                    mobilenav ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                  }`
                : `lg:flex lge:flex text-whitetext justify-center space-y-6 text-[17px] font-Poppins font-semibold sm:hidden md:hidden mdsm:hidden`
            } `}
          > */}
                                <li></li>
                                <Link to="/" className={`block px-3`}>
                                    <li className={`${props.active === 'home' ? 'active' : 'hover-underline-animation'}`}>Home</li>
                                </Link>
                                <Link to="/about" className={`block px-3`}>
                                    <li className={`${props.active === 'about' ? 'active' : 'hover-underline-animation'}`}>About us</li>
                                </Link>
                                <li className="px-3 relative group flex ">
                                    <span className="text-white cursor-pointer">What We Offer</span>
                                    <HiChevronDown className="text-[20px] cursor-pointer mt-1 mx-1" />
                                    <ul
                                        className={`hidden absolute top-14 sm:z-[99] lg:z-0 lge:z-0 md:z-[99] mdsm:z-[99] bg-primary border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 group-hover:block slide-top`}
                                    >
                                        <Link to="/what-we-offer/teaching" className={`text-center block py-2.5 px-7 hover:bg-secondary`}>
                                            <li className={`${props.active === 'what-we-offer/teaching' ? 'active' : 'hover-underline-animation'} `}>
                                                Teaching
                                            </li>
                                        </Link>
                                        {/* <br /> */}
                                        <Link to="/what-we-offer/research" className={`text-center block py-2.5 px-5 hover:bg-secondary`}>
                                            <li className={`${props.active === 'research' ? 'active' : 'hover-underline-animation'}`}>Research</li>
                                        </Link>
                                        {/* <br /> */}
                                        <Link to="/what-we-offer/advocacy" className={`text-center block py-2.5 px-5 hover:bg-secondary`}>
                                            <li className={`${props.active === 'advocacy' ? 'active' : 'hover-underline-animation'}`}>Advocacy</li>
                                        </Link>
                                        {/* <br /> */}

                                        <Link to="/what-we-offer/practice" className={`text-center block py-2.5 px-5 hover:bg-secondary`}>
                                            <li className={`${props.active === 'practice' ? 'active' : 'hover-underline-animation'}`}>Practice</li>
                                        </Link>
                                    </ul>
                                </li>
                                <Link to="/clients" className={`block px-3`}>
                                    <li className={`${props.active === 'clients' ? 'active' : 'hover-underline-animation'}`}>Clients</li>
                                </Link>
                                <Link to="/blogs" className={`block px-3`}>
                                    <li className={`${props.active === 'blogs' ? 'active' : 'hover-underline-animation'} `}>Blogs</li>
                                </Link>
                                <Link to="/news-announcements" className={`block px-3`}>
                                    <li className={`${props.active === 'news-announcements' ? 'active' : 'hover-underline-animation'}`}>
                                        News/Announcements
                                    </li>
                                </Link>
                                <Link to="/contact-us" className={`block px-3`}>
                                    <li className={`${props.active === 'contact' ? 'active' : 'hover-underline-animation'}`}>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-1">
                            <div className="">
                                {props.Display !== undefined ? (
                                    <div className=" pt-20 sm:pt-5 pl-[150px] sm:pl-[75px] lg:h-[323px] lge:h-[323px] sm:h-[125px] mdsm:h-[190px]">
                                        <h2 className="text-white sm:text-[18px] lg:text-[40px] lge:text-[40px] md:text-[20px] mdsm:text-[20px] font-Lato relative font-medium py-6 -z-[99]">
                                            <span className="border-b-[6px] sm:border-b-[3px] w-[15%] text-[#EC5800] absolute top-[85px] sm:top-12 sm:w-[10%]"></span>{' '}
                                            {props.Display}{' '}
                                        </h2>
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center lg:h-[323px] lge:h-[323px] sm:h-[125px] mdsm:h-[190px]">
                                        <p className="lg:text-[50px] lge:text-[50px] text-whitetext font-LatoBold sm:text-[15px] mdsm:text-[30px]">
                                            Empower Your <br />
                                            Voice and Help
                                            <br /> Create India
                                            {/* {props.Display} */}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div></div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* <img
            src={props.SrcImg}
            loading="lazy"
            alt="Header Banner"
            draggable="false"
            className="w-full h-full"
          /> */}
                    <LazyLoadImage
                        src={props.SrcImg}
                        alt="Header Banner"
                        // width="1440"
                        // height="399"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
}
