import React from 'react';
import Nav from '../Navbar/Nav';
import Header from './assets/images/ContactHeader.png';
import ContactPage from './ContactPage';
import Footer from '../Footer/Footer';

export default function Contact() {
    return (
        <div className="onload">
            <Nav SrcImg={Header} Display="Contact Us" active="contact" />

            {/* From the blog */}
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-12 px-14">
                <div className="px-3 py-6">
                    <h1
                        className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                    >
                        Get in touch
                    </h1>
                </div>
                <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                    <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
                        Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                        Arcu sed malesuada et magna.
                    </p>
                </div>
            </div>

            <ContactPage />
            <Footer />
        </div>
    );
}
