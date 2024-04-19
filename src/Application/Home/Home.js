import React from "react";
import HomeStyle from "./assets/style.module.css";
import HeaderNav from "./assets/images/header-image.webp";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Testimonials from "./Testimonials";
import About from "./About";
import BluePrint from "./BluePrint";
import Faq from "./Faq";
import OurClients from "./OurClients";
import Supporting from "./Supporting";
import WhatWeOffer from "./WhatWeOffer";
import CommunityBuilding from "./CommunityBuilding";
export default function Home() {
  return (
    <div className="onload">
      <Nav SrcImg={HeaderNav} Display={undefined} active="home" />
      {/* What We Offer */}
      <WhatWeOffer />
      {/* What We Offer */}

      {/* Community Building */}
      <CommunityBuilding />
      {/* Community Building */}
      <About />
      <BluePrint />
      {/* Testimonials */}
      <div className={`bg-fixed ${HomeStyle.testbg} pb-8`}>
        <div className=" w-[100%] py-8">
          <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
            <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span>{" "}
            Testimonials{" "}
          </h1>
        </div>
        <br />
        <Testimonials />
      </div>
      {/* Supporting children around the globe */}
      <Supporting />
      {/* Supporting children around the globe */}
      {/* Our Clients */}
      <OurClients />
      {/* Our Clients */}
      {/* Frequently Asked Question */}
      <Faq />
      {/* Frequently Asked Question */}
      <Footer />
    </div>
  );
}
