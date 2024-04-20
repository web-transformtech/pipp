import './pages.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import Amazon from '../images/companys/Amazon.png';
import Tech from '../images/companys/tech.png';
import Byjus from '../images/companys/byjus.png';
import Flipkart from '../images/companys/Flipkart.png';
export default function TrustedCompany() {
    return (
        <div className="pt-10 pb-20">
            <h2 className="font-Lato font-semibold text-primary text-[30px] text-center ">Trusted By 1k+ Company Arround The World!</h2>
            {/* <div className="grid grid-cols-6 ">
          <div className="border border-[#EC5800] mx-20 h-40 flex justify-center items-center">
            <HiOutlineChevronLeft className="text-[50px] text-[#EC5800]" />
          </div>
          <div className="flex items-center">
            <img src={Amazon} />
          </div>
          <div className="flex items-center">
            <img src={Tech} />
          </div>
          <div className="flex items-center">
            <img src={Byjus} />
          </div>
          <div className="flex items-center">
            <img src={Flipkart} />
          </div>
          <div className="border border-[#EC5800] mx-20 h-40 flex justify-center items-center">
            <HiOutlineChevronRight className="text-[50px] text-[#EC5800]" />
          </div>
        </div> */}

            <div className="container mx-auto">
                <div className="overflow-hidden">
                    <div className="lg:w-[85%] md:w-[85%] mdsm:w-[85%] mx-auto relative">
                        <div className="mx-10">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                keyboard={{
                                    enabled: true,
                                }}
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4.5,
                                        spaceBetween: 50,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Keyboard, Navigation]}
                                className="mySwiper"
                            >
                                <div className="overflow-hidden">
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Amazon}
                                                alt="Amazon"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Byjus}
                                                alt="Byjus"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Tech}
                                                alt="Tech"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Flipkart}
                                                alt="Flipkart"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Byjus}
                                                alt="Byjus"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Amazon}
                                                alt="Amazon"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="cursor-grab">
                                            <img
                                                src={Tech}
                                                alt="Tech"
                                                height="100%"
                                                width="100%"
                                                className="transition-5  ease-in-out delay-150 hover:-translate-y-1 object-cover hover:scale-110 duration-300  px-4"
                                            />
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
