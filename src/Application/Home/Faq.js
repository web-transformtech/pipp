import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
function Faq() {
    const [activeIndex, setActiveIndex] = useState(-1);
    function handleClick(index) {
        setActiveIndex(index === activeIndex ? -1 : index);
    }
    const items = [
        {
            question: 'What is Lorem Ipsum?',
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            question: 'Why do we use it?',
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            question: 'Where does it come from?',
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            question: 'Where can I get some?',
            answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];
    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mdsm:grid-cols-1 py-10 px-14">
                    <div className="px-3 lg:flex lg:items-center">
                        <h1
                            className={`text-primary  lg:text-[44px] lge:text-[44px] font-Lato font-semibold sm:text-[30px] mdsm:text-[40px] md:text-[40px] mdsm:flex mdsm:justify-center sm:flex sm:justify-center`}
                        >
                            Frequently Asked Question
                        </h1>
                    </div>
                    <div className="lge:border-l-[2px] lg:border-l-[2px] flex items-center sm:border-t-[1px] sm:py-5 mdsm:py-5 mdsm:pl-0 sm:mx-0 sm:pl-0 text-justify border-border-color lg:mx-10 lge:mx-10 col-span-2 lg:pl-10 lge:pl-10">
                        <div className="lg:w-[80%] md:w-[100%] mdsm:w-[100%] mx-auto sm:w-[90%]">
                            {items?.map((item, index) => (
                                <div key={item.question} className="w-[100%] border-b-[1px] border-[#86868C]">
                                    <div onClick={() => handleClick(index)} className="flex">
                                        <div className="w-[100%] sm:text-[16px] cursor-pointer text-primary font-Lato font-bold text-[22px] text-left  py-2">
                                            {item.question}
                                        </div>
                                        <div className="cursor-pointer text-primary font-semibold text-[18px] transition duration-300 text-left  py-2">
                                            {index === activeIndex ? <HiChevronUp /> : <HiChevronDown />}
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            index === activeIndex ? '' : 'hidden'
                                        } pb-5 sm:text-sm font-PoppinsLight font-semibold px-5 leading-relaxed text-secondary-text`}
                                    >
                                        {index === activeIndex && <p>{item.answer}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Faq;
