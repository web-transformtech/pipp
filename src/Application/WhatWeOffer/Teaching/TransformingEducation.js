import React from 'react';
import Transforming from './assets/images/transforming.png';

export default function TransformingEducation() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 border-t-[1px] border-border-color">
                <div className="mx-5 py-20">
                    {/* <p className="font-PoppinsMedium">Innovative</p> */}
                    <h2 className="font-LatoBold text-[50px] text-primary pb-2">Transforming Education Through Unique Teaching Methods</h2>
                    <p className="leading-relaxed font-Poppins text-secondary-text">
                        At our teaching webpage, we believe in a student-centered approach that fosters critical thinking and creativity. Through our
                        innovative teaching methods, we aim to empower students to become lifelong learners.
                    </p>
                    <div className="grid grid-cols-2 pt-5">
                        <div>
                            <h2 className="text-[50px] text-primary font-LatoBold">50%</h2>
                            <p className="font-Poppins text-secondary-text">Engaging and Interactive Learning Experiences</p>
                        </div>
                        <div>
                            <h2 className="text-[50px] text-primary font-LatoBold">50%</h2>
                            <p className="font-Poppins text-secondary-text">Personalized Support for Every Students</p>
                        </div>
                    </div>
                    <div className="pt-10">
                        <button className="border py-3 px-6 bg-secondary text-white font-Poppins transition hover:bg-secondary-text">
                            Learn More
                        </button>
                    </div>
                </div>
                <div>
                    <img src={Transforming} alt="Transforming" className="h-[100%] w-full object-cover" />
                </div>
            </div>
        </div>
    );
}
