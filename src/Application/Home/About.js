import AboutImg from './assets/images/About Pipp.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function About() {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary pb-20">
            <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
                <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span> About PIPP{' '}
            </h1>
            <div className="container mx-auto lg:grid lg:grid-cols-2 lge:grid lge:grid-cols-2 sm:grid-cols-1 mdsm:grid-cols-1 md:grid-cols-1 py-5">
                <div className="lg:p-0 lge:p-0 md:p-8 sm:p-8 wow animate__animated animate__fadeInLeft">
                    {/* <img src={AboutImg} alt="About" loading="lazy" /> */}
                    <LazyLoadImage src={AboutImg} alt="About" draggable="false" />
                </div>
                <div className=" pl-12 sm:pl-8">
                    <div className="text-white font-PoppinsLight text-[19px]">
                        <p className="pb-8">
                            We bring together senior leaders and practitioners in the public and private health and life sciences sectors to find
                            realistic solutions to the most pressing issues relating to health and care delivery.
                        </p>
                        <p className="pb-8">
                            We facilitate effective collaboration between public and private sector organisations. We help businesses to grow their
                            profile within the NHS and wider public sector. In turn, we support public sector leaders and organisations with practical
                            recommendations on implementing policy to improve health and wellbeing outcomes for local populations.
                        </p>
                        <p className="pb-8">
                            We offer insight, analysis and intelligence through research, editorial, events, and written reports. Our chair Stephen
                            Dorrell, a former Secretary of State for Health, remains actively involved in policy delivery in the health and life
                            sciences sectors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
