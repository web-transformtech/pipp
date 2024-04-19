import React from 'react';
import BluePrintIMG from './assets/images/Blue Print.webp';
import Healthier from './assets/images/Blue Prints/healthier.webp';
import EQUITABLE from './assets/images/Blue Prints/MORE EQUITABLE.webp';
import AFFORDABLE from './assets/images/Blue Prints/MORE AFFORDABLE.webp';
import GREENER from './assets/images/Blue Prints/GREENER.webp';
import ADAPTABLE from './assets/images/Blue Prints/MORE ADAPTABLE.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function BluePrint() {
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-10 px-14">
                    <div className="px-3">
                        <h1
                            className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                        >
                            Blueprints for the future
                        </h1>
                    </div>
                    <div className="lge:border-l-[2px] lg:border-l-[2px] flex items-center sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                        <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
                            The <span className="font-extrabold">Padmavathi Institute of Public Policy</span> community is exploring new building
                            practices that are greener, healthier, and more inclusive.
                        </p>
                    </div>
                </div>
                <div className="lg:grid lg:grid-cols-5 lge:grid lge:grid-cols-5 sm:grid-cols-1 mdsm:grid-cols-1 md:grid-cols-1 px-14 pb-12">
                    <div className="col-span-3">
                        <LazyLoadImage src={BluePrintIMG} alt="BluePrint" loading="lazy" draggable="false" className="w-[100%]" />
                        <h2
                            className={`text-primary lg:text-[48px] lge:text-[48px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                        >
                            Healthy buildings and cognitive function
                        </h2>
                        <p className="font-PoppinsLight text-[18px] text-secondary-text py-5 sm:text-[16px]">
                            Thirty years of public health research has demonstrated that improved indoor environmental quality is associated with
                            better health outcomes.
                        </p>
                    </div>
                    <div className="col-span-2 pl-10 sm:pl-0">
                        <div className="border-b-[1px] border-border-color pb-4">
                            <p className="uppercase text-secondary-text font-Lato font-[600]">HEALTHIER</p>
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center">
                                    <p className="text-primary text-[18px] font-PoppinsBold">Hospital architecture can help patients heal</p>
                                </div>
                                <div className="flex justify-end">
                                    <LazyLoadImage src={Healthier} alt="Healthier" loading="lazy" className="" draggable="false" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-border-color pb-4 pt-4">
                            <p className="uppercase text-secondary-text font-Lato font-[600]">MORE EQUITABLE</p>
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center">
                                    <p className="text-primary text-[18px] font-PoppinsBold">
                                        Celebrating the design work of the African diaspora community
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <LazyLoadImage src={EQUITABLE} alt="EQUITABLE" loading="lazy" draggable="false" className="" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-border-color pb-4 pt-4">
                            <p className="uppercase text-secondary-text font-Lato font-[600]">MORE AFFORDABLE</p>
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center">
                                    <p className="text-primary text-[18px] font-PoppinsBold">Designing high-quality, affordable housing</p>
                                </div>
                                <div className="flex justify-end">
                                    <LazyLoadImage src={AFFORDABLE} alt="AFFORDABLE" loading="lazy" draggable="false" className="" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-border-color pb-4 pt-4">
                            <p className="uppercase text-secondary-text font-Lato font-[600]">GREENER</p>
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center">
                                    <p className="text-primary text-[18px] font-PoppinsBold">Sustainable solutions for a better built environment</p>
                                </div>
                                <div className="flex justify-end">
                                    <LazyLoadImage src={GREENER} alt="GREENER" loading="lazy" draggable="false" className="" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-border-color pb-4 pt-4">
                            <p className="uppercase text-secondary-text font-Lato font-[600]">MORE ADAPTABLE</p>
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center">
                                    <p className="text-primary text-[18px] font-PoppinsBold">
                                        Indigenous technologies provides a powerful toolkit for climate-resilient design
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <LazyLoadImage src={ADAPTABLE} alt="ADAPTABLE" loading="lazy" draggable="false" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BluePrint;
