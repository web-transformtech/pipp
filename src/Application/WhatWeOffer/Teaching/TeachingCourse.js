import React from 'react';
import { RiBox2Fill } from 'react-icons/ri';

export default function TeachingCourse() {
    return (
        <div>
            <div className="container mx-auto pb-20">
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 border-t-[1px] border-border-color ">
                    <div className="mx-2 sm:mx-10 md:mx-10 pt-10">
                        <RiBox2Fill className="text-[40px] text-text" />
                        <h2 className="text-[26px] text-primary font-LatoBold pb-4 pt-4">
                            Achieve High Success Rates with Our Proven Teaching Methods
                        </h2>
                        <p className="font-Poppins text-secondary-text">
                            Our institution has a track record of high success rates, thanks to our effective teaching methods. We employ innovative
                            approaches that cater to different learning styles, ensuring that every student has the opportunity to thrive
                            academically. Our experienced teachers utilize a combination of interactive lectures, hands-on activities, and practical
                            assessments to foster deep understanding and long-term retention of knowledge.
                        </p>
                    </div>

                    <div className="mx-2 sm:mx-10 md:mx-10 pt-10">
                        <RiBox2Fill className="text-[40px] text-text" />
                        <h2 className="text-[26px] text-primary font-LatoBold pb-4 pt-4">
                            Embrace Innovative Learning Tools for an Engaging Educational Experience
                        </h2>
                        <p className="font-Poppins text-secondary-text ">
                            We believe in the power of technology to enhance learning. Our institution provides access to cutting-edge learning tools
                            and resources that make education interactive and engaging. From virtual simulations to online collaboration platforms,
                            students can explore concepts, collaborate with peers, and develop essential skills in a dynamic and immersive learning
                            environment.
                        </p>
                    </div>

                    <div className="mx-2 sm:mx-10 md:mx-10 pt-10">
                        <RiBox2Fill className="text-[40px] text-text" />
                        <h2 className="text-[26px] text-primary font-LatoBold pb-4 pt-4">
                            Unlock Your Potential with Our Comprehensive Range of Courses
                        </h2>
                        <p className="font-Poppins text-secondary-text ">
                            Our institution offers a diverse selection of courses designed to meet the needs and interests of students. Whether you're
                            looking to enhance your professional skills, pursue a new hobby, or prepare for higher education, our comprehensive range
                            of courses has you covered. Our experienced teachers will guide you through the learning journey, ensuring that you
                            acquire the knowledge and skills necessary for success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
