import './assets/style.css';
import Nav from '../Navbar/Nav';
import Header from './assets/images/BlogHeader.png';
import BlogCard from './BlogCard';
import BlogCard2 from './BlogCard2';
import Footer from '../Footer/Footer';
export default function Blog() {
    return (
        <div className="onload">
            <Nav SrcImg={Header} Display="Blogs" active="blogs" />

            {/* From the blog */}
            <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-12 px-14">
                <div className="px-3 py-6">
                    <h1
                        className={`text-primary lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                    >
                        From the blog
                    </h1>
                </div>
                <div className="lge:border-l-[2px] lg:border-l-[2px] sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                    <p className="font-Poppins text-[20px] text-secondary-text sm:text-[16px]">
                        Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic
                        from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.
                    </p>
                </div>
            </div>
            <BlogCard />

            {/* <div className="blogBg"> */}
            <BlogCard2 />
            {/* </div> */}

            <Footer />
        </div>
    );
}
