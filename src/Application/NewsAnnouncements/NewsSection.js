import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './assets/style.css';

export default function NewsSection() {
    return (
        <>
            <div className="">
                <section class="text-gray-600 body-font bg-fixed sectionBg pb-10">
                    <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
                        <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span> Announcements{' '}
                    </h1>
                    <div class="container px-5 py-4 mx-auto relative">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <div className="overflow-hidden">
                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div class="py-8 px-4 w-full rounded-md bg-white">
                                        <div class="h-full flex items-start cursor-move">
                                            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                <span class="text-text-secondary pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                                <span class="font-medium text-lg text-text-secondary leading-none">18</span>
                                            </div>
                                            <div class="flex-grow pl-6">
                                                <h2 class="tracking-widest text-xs font-PoppinsBold text-primary mb-1">CATEGORY</h2>
                                                <h1 class="text-xl text-text font-LatoBold mb-3">Neptune</h1>
                                                <p class="leading-relaxed mb-5 text-base1 text-secondary-text font-Poppins">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                                <div class="inline-flex items-center">
                                                    <img
                                                        alt="blog"
                                                        src="https://dummyimage.com/101x101"
                                                        class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                                    />
                                                    <span class="flex-grow flex flex-col pl-3">
                                                        <span class="font-medium text-primary">Henry Letham</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </section>
            </div>
        </>
    );
}
