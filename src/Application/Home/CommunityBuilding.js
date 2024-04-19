import React from 'react';
import HomeStyle from './assets/style.module.css';

function CommunityBuilding() {
    return (
        <div>
            <div className="grid lg:grid-cols-4 lge:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mdsm:grid-cols-2 py-6 px-9 pb-20">
                <div className={`bg-[#5452EE] ${HomeStyle.shadow} text-white py-8 px-12 pb-14`}>
                    <div className="h-[100%]">
                        <h2 className="font-LatoBold font-extrabold text-[36px]">Community Building</h2>
                        <p className="text-[16px] py-4 leading-[30px] font-PoppinsLight font-medium">
                            Our foremost goal is to create a policy community that is collaborative, constructive and information-first. Across social
                            media, email, and direct chat forums – we’ve garnered the trust of thousands.
                        </p>
                    </div>
                    <div className="border-b-4 w-[30%] py-1"></div>
                </div>
                <div className={`bg-[#3432C0] ${HomeStyle.shadow} text-white py-8 px-12 pb-14`}>
                    <div className="h-[100%]">
                        <h2 className="font-LatoBold font-extrabold text-[36px]">Jobs and Internships</h2>
                        <p className="text-[16px] py-4 leading-relaxed font-PoppinsLight font-medium">
                            Jobs and Internships Apart from our weekly list of fresh jobs and opportunities in the field for every level of entry – we
                            also release databases that list hundreds of organisations and opportunities at once.
                        </p>
                    </div>
                    <div className="border-b-4 w-[30%]"></div>
                </div>
                <div className={`bg-[#131188] ${HomeStyle.shadow} text-white py-8 px-12 pb-14`}>
                    <div className="h-[100%]">
                        <h2 className="font-LatoBold font-extrabold text-[36px]">Creating Awareness</h2>
                        <p className="text-[16px] py-4 leading-relaxed font-PoppinsLight font-medium">
                            At PolicyGram, we share visual and easy to understand breakdowns of complex policy issues plaguing the country. We also
                            publish opinion and research pieces by members of our community.
                        </p>
                    </div>
                    <div className="border-b-4 w-[30%]"></div>
                </div>
                <div className={`bg-[#03024E] ${HomeStyle.shadow} text-white py-8 px-12 pb-14`}>
                    <div className="h-[100%]">
                        <h2 className="font-LatoBold font-extrabold text-[36px]">Upskilling Avenues</h2>
                        <p className="text-[16px] py-4 leading-relaxed font-PoppinsLight font-medium">
                            Join The Policy Square, an initiative co-lead by YLAC to upskill and meet like-minded policy aspirants and gain mentorship
                            in the field.
                        </p>
                    </div>
                    <div className="border-b-4 w-[30%]"></div>
                </div>
            </div>
        </div>
    );
}

export default CommunityBuilding;
