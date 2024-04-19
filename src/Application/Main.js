import React from 'react';
import './Css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Clients from './Clients/Clients';
import Blog from './Blogs/Blog';
import News from './NewsAnnouncements/News';
import Contact from './ContactUs/Contact';
import Teaching from './WhatWeOffer/Teaching/Teaching';
import Advocacy from './WhatWeOffer/Advocacy/Advocacy';
import Practise from './WhatWeOffer/Practice/Practise';
import Research from './WhatWeOffer/Research/Research';
import PageNotFound from './404/PageNotFound';

export default function Main() {
    return (
        <div>
            <BrowserRouter basename="/pipp">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/news-announcements" element={<News />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/what-we-offer/teaching" element={<Teaching />} />
                    <Route path="/what-we-offer/advocacy" element={<Advocacy />} />
                    <Route path="/what-we-offer/practice" element={<Practise />} />
                    <Route path="/what-we-offer/research" element={<Research />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
