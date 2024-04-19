import React from 'react';
import About from './assets/images/about.webp';

export default function JoinUs() {
    return (
        <div>
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1 container mx-auto py-8 h-[500px] md:h-full mdsm:h-full sm:h-full">
                <div className="col-span-2">
                    <div className="grid lg:grid-cols-2 lge:grid-cols-2 sm:grid-cols-1">
                        <div className="lg:py-20 lge:py-20 mdsm:py-5 sm:py-10 mx-5">
                            <h2 className="text-[20px] font-LatoBold text-primary pb-3">Scholarship Facility</h2>
                            <p className="font-Poppins text-base1">
                                magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco
                            </p>
                        </div>
                        <div className="lg:py-20 lge:py-20 mdsm:py-5 sm:py-10 mx-5">
                            <h2 className="text-[20px] font-LatoBold text-primary pb-3">Best Teacher</h2>
                            <p className="font-Poppins text-base1">
                                magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco
                            </p>
                        </div>
                        <div className="sm:py-10 mdsm:py-8 mx-5">
                            <h2 className="text-[20px] font-LatoBold text-primary pb-3">Library & Book Store</h2>
                            <p className="font-Poppins text-base1">
                                magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco
                            </p>
                        </div>
                        <div className="sm:py-10 mdsm:py-8 mx-5">
                            <h2 className="text-[20px] font-LatoBold text-primary pb-3">25 Years Of Experience</h2>
                            <p className="font-Poppins text-base1">
                                magna aliqua. Ut enim ad minim veniam conse ctetur adipisicing elit, sed do exercitation ullamco
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={About} loading="lazy" alt="Teaching" className="" />
                </div>
            </div>
        </div>
    );
}
