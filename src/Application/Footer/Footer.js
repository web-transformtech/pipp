import React from "react";
import FooterCss from "./assets/footer.module.css";
import FooterLogo from "./assets/images/footerLogo.webp";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Footer() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-4 lge:grid lge:grid-cols-4 sm:grid sm:grid-cols-1 items-center">
        <div className="relative">
          <div className="absolute px-10 my-10">
            <div className="flex justify-center">
              <LazyLoadImage
                src={FooterLogo}
                alt="Footer Logo"
                className="text-center"
              />
            </div>
            <h3 className="text-primary text-center font-Lato font-extrabold text-[20px]">
              Padmavathi Institute of Public Policy
            </h3>
            <p className="text-secondary-text py-7 leading-relaxed font-Poppins text-[15px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div
            className={`h-[340px] ${FooterCss.footbg} drop-shadow-[13px -10px 15px -3px rgba(0,0,0,0.1)] opacity-20`}
          ></div>
        </div>
        <div className="col-span-3 border lg:h-[290px] lge:h-[290px] sm:h-full md:h-full mdsm:h-full bg-primary">
          <div className="lg:grid lg:grid-cols-2 lge:grid lge:grid-cols-2 border-b-[1px] border-white mx-10">
            <div className="">
              <div className="lg:grid lg:grid-cols-3 lge:grid lge:grid-cols-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 mdsm:grid mdsm:grid-cols-3 py-10">
                <div className="">
                  <ul className="text-white font-Poppins text-[15px] space-y-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                    <li>
                      <a href="/clients">Clients</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="text-white font-Poppins text-[15px] space-y-2">
                    <li>
                      <a href="#">What We Offer</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/teaching">Teaching</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/research">Research</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/advocacy">Advocacy</a>
                    </li>
                    <li>
                      <a href="/what-we-offer/practice">Practice</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="text-white font-Poppins text-[15px] space-y-2 sm:pt-[3px]">
                    <li>
                      <a href="/news-announcements">News/Announcements</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center pt-10 sm:pt-5 pb-5">
                <h4 className="font-LatoBold pb-2 text-[24px] text-white">
                  Subscribe for Updates
                </h4>
                <div className="flex justify-center">
                  <input
                    placeholder="Email"
                    className="mx-2 w-[50%] py-1.5 px-4 placeholder:font-Poppins"
                  />
                  <button className="bg-secondary text-white px-6 font-PoppinsLight">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-LatoBold pb-2 text-[24px] text-white">
                  Social
                </h4>
                <div className="h-9 flex justify-center space-x-5 text-[22px] sm:text-[18px] items-center text-whitetext">
                  <a href="#" target="_blank">
                    <AiFillYoutube className="text-[26px] sm:text-[20px]" />
                  </a>
                  <a href="#" target="_blank">
                    <AiFillLinkedin className="" />
                  </a>
                  <a href="#" target="_blank">
                    <AiFillFacebook className="" />
                  </a>
                  <a href="#" target="_blank">
                    <FaSquareXTwitter className="" />
                  </a>
                  <a href="#" target="_blank">
                    <AiFillInstagram className="text-[24px] sm:text-[20px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <h3 className="text-white font-PoppinsLight text-[15px] sm:px-6 md:pb-5 mdsm:pb-5">
              © Copyright 2023 Padmavathi Institute of Public Policy. All rights
              reserved.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
