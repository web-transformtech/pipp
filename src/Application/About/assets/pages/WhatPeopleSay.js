import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import Ellipse from '../images/Ellipse.png';
export default function WhatPeopleSay() {
    return (
        <div className="container mx-auto pb-10">
            <div className="overflow-hidden">
                <div className="lg:w-[90%] lge:w-[90%] sm:w-full md:w-[80%] mdsm:w-[80%] mx-auto relative">
                    <div className="">
                        <Swiper
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Keyboard, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="mx-10">
                                    <div className="grid lg:grid-cols-4 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 cursor-grab container mx-auto">
                                        <div className="flex lg:justify-start lge:justify-start items-center sm:justify-center md:justify-center mdsm:justify-center">
                                            <img src={Ellipse} alt="Ellipse" />
                                        </div>
                                        <div className="col-span-3 py-2">
                                            <div>
                                                <p className="text-[20px] text-justify font-PoppinsMedium text-secondary-text pb-4">
                                                    “ I want to let you know that I am very absolutely delighted with the course in every respect. It
                                                    has been particularly pleasing for me, with an interest in seeing the application and good
                                                    educational practice to school education. Learn a different approach that leads to better
                                                    outcomes. ”
                                                </p>
                                                <div className="border-b-[1px] border-text"></div>
                                                <div className="text-center pt-5">
                                                    <p className="font-bold text-[20px] text-secondary-text">Mr. Peter Crough</p>
                                                    <p className="font-Poppins text-[18px] text-secondary-text">Industry Partner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mx-10">
                                    <div className="grid lg:grid-cols-4 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 cursor-grab container mx-auto ">
                                        <div className="flex lg:justify-start lge:justify-start items-center sm:justify-center md:justify-center mdsm:justify-center">
                                            <img src={Ellipse} alt="Ellipse" />
                                        </div>
                                        <div className="col-span-3 py-2">
                                            <div>
                                                <p className="text-[20px] text-justify font-PoppinsMedium text-secondary-text pb-4">
                                                    “ I want to let you know that I am very absolutely delighted with the course in every respect. It
                                                    has been particularly pleasing for me, with an interest in seeing the application and good
                                                    educational practice to school education. Learn a different approach that leads to better
                                                    outcomes. ”
                                                </p>
                                                <div className="border-b-[1px] border-text"></div>
                                                <div className="text-center pt-5">
                                                    <p className="font-bold text-[20px] text-secondary-text">Mr. Peter Crough</p>
                                                    <p className="font-Poppins text-[18px] text-secondary-text">Industry Partner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mx-10">
                                    <div className="grid lg:grid-cols-4 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 cursor-grab container mx-auto">
                                        <div className="flex lg:justify-start lge:justify-start items-center sm:justify-center md:justify-center mdsm:justify-center">
                                            <img src={Ellipse} alt="Ellipse" />
                                        </div>
                                        <div className="col-span-3 py-2">
                                            <div>
                                                <p className="text-[20px] text-justify font-PoppinsMedium text-secondary-text pb-4">
                                                    “ I want to let you know that I am very absolutely delighted with the course in every respect. It
                                                    has been particularly pleasing for me, with an interest in seeing the application and good
                                                    educational practice to school education. Learn a different approach that leads to better
                                                    outcomes. ”
                                                </p>
                                                <div className="border-b-[1px] border-text"></div>
                                                <div className="text-center pt-5">
                                                    <p className="font-bold text-[20px] text-secondary-text">Mr. Peter Crough</p>
                                                    <p className="font-Poppins text-[18px] text-secondary-text">Industry Partner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="mx-10">
                                    <div className="grid lg:grid-cols-4 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 cursor-grab container mx-auto">
                                        <div className="flex lg:justify-start lge:justify-start items-center sm:justify-center md:justify-center mdsm:justify-center">
                                            <img src={Ellipse} alt="Ellipse" />
                                        </div>
                                        <div className="col-span-3 py-2">
                                            <div>
                                                <p className="text-[20px] text-justify font-PoppinsMedium text-secondary-text pb-4">
                                                    “ I want to let you know that I am very absolutely delighted with the course in every respect. It
                                                    has been particularly pleasing for me, with an interest in seeing the application and good
                                                    educational practice to school education. Learn a different approach that leads to better
                                                    outcomes. ”
                                                </p>
                                                <div className="border-b-[1px] border-text"></div>
                                                <div className="text-center pt-5">
                                                    <p className="font-bold text-[20px] text-secondary-text">Mr. Peter Crough</p>
                                                    <p className="font-Poppins text-[18px] text-secondary-text">Industry Partner</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
                        </Swiper>

                        {/* <div className="grid lg:grid-cols-4 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 container mx-auto pb-10">
        <div className="flex justify-center">
          <img src={Ellipse} />
        </div>
        <div className="col-span-3 py-2">
          <div>
            <p className="text-[20px] text-justify font-PoppinsMedium text-secondary-text pb-4">
              “ I want to let you know that I am very absolutely delighted with
              the course in every respect. It has been particularly pleasing for
              me, with an interest in seeing the application and good
              educational practice to school education. Learn a different
              approach that leads to better outcomes. ”
            </p>
            <div className="border-b-[1px] border-text"></div>
            <div className="text-center pt-5">
              <p className="font-bold text-[20px] text-secondary-text">
                Mr. Peter Crough
              </p>
              <p className="font-Poppins text-[18px] text-secondary-text">
                Industry Partner
              </p>
            </div>
          </div>
        </div>
      </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
