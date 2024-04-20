import HomeStyle from './assets/style.module.css';
import Benz from './assets/images/our clients images/benz.webp';
import Amazon from './assets/images/our clients images/Amazon.webp';
import Byjus from './assets/images/our clients images/byjus.webp';
import Deloitte from './assets/images/our clients images/Deloitte.webp';
import Accenture from './assets/images/our clients images/accenture.webp';
import Axis from './assets/images/our clients images/axis.webp';
import Flipkart from './assets/images/our clients images/Flipkart.webp';
import Tech from './assets/images/our clients images/tech.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function OurClients() {
    return (
        <div>
            <div className={`bg-fixed ${HomeStyle.clients} pb-14`}>
                <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
                    <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span> Our Clients{' '}
                </h1>
                <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lge:grid lge:grid-rows-2 lge:grid-flow-col md:grid md:grid-rows-4 md:grid-flow-col mdsm:grid mdsm:grid-rows-4 mdsm:grid-flow-col sm:grid sm:grid-flow-row gap-6 px-32 py-10">
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Benz} draggable="false" alt="Benz" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Accenture} draggable="false" alt="Accenture" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Amazon} draggable="false" alt="Amazon" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Axis} draggable="false" alt="Axis" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Byjus} draggable="false" alt="Byjus" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Flipkart} draggable="false" alt="Flipkart" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Deloitte} draggable="false" alt="Deloitte" loading="lazy" />
                    </div>
                    <div className="bg-[#D9D9D9] flex justify-center items-center p-2">
                        <LazyLoadImage src={Tech} draggable="false" alt="Tech" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClients;
