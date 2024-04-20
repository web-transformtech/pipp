import Staff from './assets/images/staff.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Testimonials() {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 lge:grid lge:grid-cols-2 sm:grid-cols-1 w-[100%] px-8 ">
                <div className="text-center py-2">
                    <div className="flex justify-center">
                        <LazyLoadImage src={Staff} alt="Staff" draggable="false" loading="lazy" className="" />
                    </div>
                    <p className="py-5 px-20 text-white font-PoppinsLight leading-relaxed">
                        Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&#39;s cronut +1 kinfolk. Single-origin
                        coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                    </p>
                    <div className="flex justify-center py-3">
                        <p className="border-b-4 w-[10%] rounded-lg border-primary"></p>
                    </div>
                    <h2 className="uppercase text-text font-semibold text-[16px]">HOLDEN CAULFIELD</h2>
                    <p className="text-white font-PoppinsLight text-[13px]">Senior Product Designer</p>
                </div>

                <div className="text-center py-2">
                    <div className="flex justify-center">
                        <LazyLoadImage src={Staff} alt="Staff" draggable="false" loading="lazy" className="" />
                    </div>
                    <p className="py-5 px-20 text-white font-PoppinsLight leading-relaxed">
                        Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&#39;s cronut +1 kinfolk. Single-origin
                        coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                    </p>
                    <div className="flex justify-center py-3">
                        <p className="border-b-4 w-[10%] rounded-lg border-primary"></p>
                    </div>
                    <h2 className="uppercase text-text font-semibold text-[16px]">HOLDEN CAULFIELD</h2>
                    <p className="text-white font-PoppinsLight text-[13px]">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
}
