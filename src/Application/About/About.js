import React from "react";
import "./assets/about.css";
import { FaRegHandshake } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";
import Nav from "../Navbar/Nav";
import Header from "./assets/images/Header-Image.png";
import OurValues from "./assets/images/OurValues.png";
import MissionEllipse from "./assets/images/MissionEllipse.png";
import TrustedCompany from "./assets/pages/TrustedCompany";
import WhatPeopleSay from "./assets/pages/WhatPeopleSay";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div className="onload">
      <Nav SrcImg={Header} Display="About Us" active="about" />
      {/* We are the Centre for Public Impact */}
      <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-12 px-14">
        <div className="px-3 py-6">
          <h1
            className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
          >
            We are the Centre for Public Impact
          </h1>
        </div>
        <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
          <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
            We act as a learning partner for governments, public servants, and
            the diverse network of changemakers leading the charge to reimagine
            government so that it works for everyone.
          </p>
        </div>
      </div>
      {/* Our Values */}
      <div className="bg-gradient-to-r from-primary to-secondary pb-20">
        <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
          <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span>{" "}
          Our Values{" "}
        </h1>
        <div className="container mx-auto lg:grid lg:grid-cols-2 lge:grid lge:grid-cols-2 sm:grid-cols-1 mdsm:grid-cols-1 md:grid-cols-1 py-5">
          <div className="lg:p-0 lge:p-0 md:p-8 sm:p-8">
            <img src={OurValues} alt="OurValues" />
          </div>
          <div className="pl-12 sm:pl-8 ">
            <div>
              <p className="text-text text-[24px] font-Lato">We are....</p>
              <div className="pt-8">
                <div className="flex items-center">
                  <div className="border-[#EC5800] flex border-[1px] h-[80px] w-[80px] justify-center items-center rounded-full">
                    <BsLightningCharge className="text-text flex text-[35px]" />
                  </div>
                  <p className="text-text font-LatoBold text-[24px] px-4">
                    Courageous
                  </p>
                </div>
                <p className="text-white font-PoppinsLight text-[18px] pl-[100px]">
                  We have the courage to speak the truth, to challenge without
                  fear and tackle the difficult questions
                </p>
              </div>
              <div className="pt-8">
                <div className="flex items-center">
                  <div className="border-[#EC5800] flex border-[1px] h-[80px] w-[80px] justify-center items-center rounded-full">
                    <FaRegHandshake className="text-text flex text-[35px]" />
                  </div>
                  <p className="text-text font-LatoBold text-[24px] px-4">
                    Respectful
                  </p>
                </div>
                <p className="text-white font-PoppinsLight text-[18px] pl-[100px]">
                  We have the courage to speak the truth, to challenge without
                  fear and tackle the difficult questions
                </p>
              </div>
              <div className="pt-8">
                <div className="flex items-center">
                  <div className="border-[#EC5800] flex border-[1px] h-[80px] w-[80px] justify-center items-center rounded-full">
                    <TbHeartRateMonitor className="text-text flex text-[35px]" />
                  </div>
                  <p className="text-text font-LatoBold text-[24px] px-4">
                    Optimistic
                  </p>
                </div>
                <p className="text-white font-PoppinsLight text-[18px] pl-[100px]">
                  We have the courage to speak the truth, to challenge without
                  fear and tackle the difficult questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What People Say */}
      <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-6 px-14">
        <div className="px-3 py-6">
          <h1
            className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
          >
            What People Say
          </h1>
        </div>
        <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
          <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minimveniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>
      <WhatPeopleSay />
      {/* Mission Vision */}
      <div className="bg-fixed missionBg pb-20 lg:px-40 lge:px-40 md:px-20 mdsm:px-20">
        <div className="grid grid-cols-3 sm:grid-cols-1 container mx-auto pt-8 border-b-[1px] border-text pb-5">
          <div className="col-span-2 sm:pb-2">
            <div className="">
              <h1 className="text-text sm:text-[30px] text-[50px] font-LatoBold sm:text-center relative font-medium py-6">
                <span className="border-b-[3px] w-[12%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span>{" "}
                Mission{" "}
              </h1>
              <p className="text-white text-[20px] sm:px-5 sm:text-center font-PoppinsLight">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimveniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </p>
            </div>
          </div>
          <div className="flex justify-end sm:justify-center items-center">
            <img src={MissionEllipse} alt="MissionEllipse" className="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-5 lge:grid-cols-5 md:grid-cols-3 mdsm:grid-cols-3 sm:grid-cols-1 container mx-auto pt-8 border-b-[1px] border-text pb-5">
          <div className="flex justify-start sm:justify-center items-center sm:order-last">
            <img src={MissionEllipse} alt="MissionEllipse" className="" />
          </div>
          <div className="lg:col-span-4 lge:col-span-4 md:col-span-2 mdsm:col-span-2">
            <div className="sm:pb-2">
              <h1 className="text-text sm:text-[30px] text-[50px] font-LatoBold sm:text-center relative font-medium py-6">
                <span className="border-b-[3px] w-[12%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span>{" "}
                Vision{" "}
              </h1>
              <p className="text-white text-[20px] sm:px-5 sm:text-center font-PoppinsLight">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimveniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 container mx-auto pt-8 border-b-[1px] border-text pb-5">
          <div className="col-span-2 sm:pb-2">
            <div className="">
              <h1 className="text-text sm:text-[30px] text-[50px] font-LatoBold sm:text-center relative font-medium py-6">
                <span className="border-b-[3px] w-[12%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span>{" "}
                History{" "}
              </h1>
              <p className="text-white text-[20px] sm:px-5 sm:text-center font-PoppinsLight">
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimveniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip
              </p>
            </div>
          </div>
          <div className="flex justify-end sm:justify-center items-center">
            <img src={MissionEllipse} alt="MissionEllipse" className="" />
          </div>
        </div>
      </div>
      {/* Trusted By 1k+ Company Arround The World! */}
      <TrustedCompany />
      <Footer />
    </div>
  );
}
