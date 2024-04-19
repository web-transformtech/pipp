import React from 'react';
import Nav from '../../Navbar/Nav';
import Header from './assets/image/BannerHeader.png';
import Footer from '../../Footer/Footer';
// import CardTeaching from "../Teaching/CardTeaching";
import JoinUs from './JoinUs';
import TeachingCourse from './TeachingCourse';
import OurTeam from './OurTeam';

export default function Research() {
    return (
        <div className="onload">
            <Nav SrcImg={Header} Display="What We Offer / Research" active="research" />
            {/* Pitchfork Kickstarter Taxidermy */}
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-12 px-14">
                <div className="px-3 py-6">
                    <h1
                        className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                    >
                        Research
                    </h1>
                </div>
                <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                    <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably
                        haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
                    </p>
                </div>
            </div>
            {/* <CardTeaching/> */}
            <TeachingCourse />
            <OurTeam />
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-1 sm:px-9 px-14">
                <div className="px-3 py-6">
                    <h1
                        className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                    >
                        Be world-class
                    </h1>
                </div>
                <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                    <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
                        Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae
                        dicta molestiae et. Aliquid velit porro vero.
                    </p>
                </div>
            </div>
            <JoinUs />
            <Footer />
        </div>
    );
}
