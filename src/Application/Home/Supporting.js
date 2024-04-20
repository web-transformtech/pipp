import Support from './assets/images/Support.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Supporting() {
    return (
        <div>
            <div className="pb-20">
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-10 px-14">
                    <div className="px-3">
                        <h1
                            className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                        >
                            Supporting children around the globe
                        </h1>
                    </div>
                    <div className="lge:border-l-[2px] lg:border-l-[2px] flex items-center sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                        <p className="font-Poppins lg:px-4 lge:px-4 text-[20px] text-secondary-text sm:text-[16px]">
                            “Early Childhood Development: Global Strategies for Interventions” is a free online course that examines best practices in
                            child and family policies, advocacy, financing, and pathways to scale.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:grid lg:grid-cols-2 lge:grid lge:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1">
                        <div className="">{/* <LazyLoadImage src={Support} loading="lazy" className=''/> */}</div>
                        <div className="">
                            <p className="lg:absolute lg:text-white lge:text-white lg:bg-[#fdfafa00] md:bg-primary md:text-white mdsm:bg-primary mdsm:text-white sm:bg-primary sm:text-white font-Poppins lg:py-52 lge:py-52 sm:py-5 md:py-6 mdsm:py-6 text-[20px] px-16 font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-center ">
                        <LazyLoadImage src={Support} alt="Support" draggable="false" loading="lazy" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Supporting;
