import './assets/style.css';
export default function OurTeam() {
    const Teams = [
        {
            img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            name: 'John Doe',
            designation: 'Math Teacher',
            quote: 'With a passion for numbers and a dedication to student success.',
        },
        {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Jane Smith',
            designation: 'English Teacher',
            quote: 'Helping students master the art of effective communication.',
        },
        {
            img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Michael Johnson',
            designation: 'Science Teacher',
            quote: 'Igniting curiosity and fostering a love for scientific discovery.',
        },
        {
            img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Emily Davis',
            designation: 'History Teacher',
            quote: 'Bringing the past to life and making history engaging for students.',
        },
        {
            img: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            name: 'Whitney Francis',
            designation: 'Copywriter',
            quote: 'Bringing the past to life and making history engaging for students.',
        },
        {
            img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            name: 'Leonard Krasner',
            designation: 'Principal',
            quote: 'Bringing the past to life and making history engaging for students.',
        },
    ];
    return (
        <div className="pb-10">
            <div className="bg-gradient-to-r from-primary to-secondary">
                <h1 className="text-text sm:text-[30px] text-[50px] font-Lato relative font-medium text-center py-6">
                    <span className="border-b-[3px] w-[6%] text-white absolute top-24 sm:top-16 sm:w-[10%]"></span> Meet our team{' '}
                </h1>
                <div className="grid lg:grid-cols-3 lge:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mdsm:grid-cols-2 container mx-auto py-10 ">
                    {Teams.map((team, i) => (
                        <div key={i} className="px-3 p-10 glassBg lg:mx-3 lge:mx-3 sm:mx-6 md:mx-6 mdsm:mx-6 my-3">
                            <img src={team.img} loading="lazy" alt="Team Members" className="mx-auto h-56 w-56 rounded-full" />
                            <h2 className="text-center text-[20px] font-LatoBold text-text pt-4 pb-2">{team.name}</h2>
                            <p className="text-white font-Poppins text-center pb-2">{team.designation}</p>
                            <p className="text-white font-Poppins text-center pt-5">{team.quote}</p>
                            <div className="flex justify-center gap-x-5 pt-4">
                                <a href="https://pipp.rvscas.ac.in/">
                                    <svg className="h-5 w-5 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="https://pipp.rvscas.ac.in/">
                                    <svg className="h-5 w-5 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="https://pipp.rvscas.ac.in/">
                                    <svg className="h-5 w-5 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* <div>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              className="mx-auto h-56 w-56 rounded-full"
            />
            <h2 className="text-center text-[20px] font-LatoBold text-text pt-4 pb-2">
              John Doe
            </h2>
            <p className="text-white font-Poppins text-center pb-2">
              Math Teacher
            </p>
            <p className="text-white font-Poppins text-center pt-5">
              With a passion for numbers and a dedication to student success.
            </p>
            <div className="flex justify-center gap-x-5 pt-4">
              <a href="#">
                <svg
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
          </div> */}
                    {/* <div></div>
          <div></div> */}
                </div>
            </div>
        </div>
    );
}
