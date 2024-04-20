import './assets/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
export default function BlogCard2() {
    const posts = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },

        {
            id: 2,
            title: 'How to use search engine optimization to drive sales',
            href: '#',
            description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                name: 'Lindsay Walton',
                role: 'Front-end Developer',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },

        {
            id: 3,
            title: 'Improve your customer experience',
            href: '#',
            description:
                'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: { title: 'Marketing', href: '#' },
            author: {
                name: 'Tom Cook',
                role: 'Director of Product',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
    ];

    return (
        <div className="bg-white py-3 pb-20 sm:py-32 blogBg">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
                        <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span> Blogs{' '}
                    </h1>
                    {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p> */}
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            //   navigation={true}
                            className="mySwiper"
                        >
                            {posts.map((post) => (
                                <>
                                    <SwiperSlide>
                                        <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                                <img
                                                    src={post.imageUrl}
                                                    alt=""
                                                    className="absolute inset-0 h-full w-full rounded-[25px] object-cover"
                                                />
                                                <div className="absolute inset-0 rounded-[25px] ring-1 ring-inset ring-[rgba(17,24,39,0.1)]" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-x-4 text-sm">
                                                    <time dateTime={post.datetime} className="text-white font-Poppins">
                                                        {post.date}
                                                    </time>
                                                    <a
                                                        href={post.category.href}
                                                        className="relative z-10 rounded-full bg-white text-secondary-text px-3 py-1.5 font-medium "
                                                    >
                                                        {post.category.title}
                                                    </a>
                                                </div>
                                                <div className="group relative max-w-xl">
                                                    <h3 className="mt-3 text-[18px] font-LatoBold leading-6 text-text group-hover:text-[#FFBC42]">
                                                        <a href={post.href}>
                                                            <span className="absolute inset-0" />
                                                            {post.title}
                                                        </a>
                                                    </h3>
                                                    <p className="mt-5 text-sm font-PoppinsLight leading-6 text-white">{post.description}</p>
                                                </div>
                                                <div className="mt-6 flex border-t border-[rgba(17,24,39,0.1)] pt-6">
                                                    <div className="relative flex items-center gap-x-4">
                                                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-white" />
                                                        <div className="text-sm leading-6">
                                                            <p className="font-LatoBold text-text">
                                                                <a href={post.author.href}>
                                                                    <span className="absolute inset-0" />
                                                                    {post.author.name}
                                                                </a>
                                                            </p>
                                                            <p className="text-white font-PoppinsLight">{post.author.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
