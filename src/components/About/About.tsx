import {
    FaFlag,
    FaEye,
    FaUsers,
} from "react-icons/fa";

import MissionCard from "./MissionCard";
import teamImage from "../../assets/images/team.png";

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#F8F6FD] py-10 sm:py-12 lg:py-4 px-4 sm:px-6"
        >

            <div
                className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >

                <div className="relative w-full">

                    <img
                        src={teamImage}
                        alt="UIKEY Services Team"
                        className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[430px] object-cover rounded-2xl sm:rounded-3xl "
                    />


                    <div
                        className="absolute left-4 sm:left-6 lg:-left-6 bottom-[-70px] sm:bottom-[-60px] lg:bottom-[-45px] w-[calc(100%-32px)] sm:w-[320px] lg:w-[340px] rounded-2xl bg-gradient-to-r from-violet-700 to-purple-600 p-4 sm:p-5 shadow-xl text-white "
                    >

                        <div className="flex items-start gap-3 sm:gap-4">

                

                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500/60 flex  items-center justify-center flex-shrink-0 "
                            >
                                <FaUsers
                                    className="text-white text-lg sm:text-xl "
                                />
                            </div>

                

                            <div>

                                <h3
                                    className="text-sm sm:text-base font-bold leading-5 sm:leading-6 "
                                >
                                    Trusted by Businesses
                                    <br />
                                    Across India
                                </h3>

                                <p
                                    className="mt-2 text-[11px] sm:text-xs leading-4 sm:leading-5 text-violet-100 "
                                >
                                    We help businesses modernize
                                    <br className="hidden sm:block" />
                                    and grow with reliable &
                                    <br className="hidden sm:block" />
                                    scalable IT solutions.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="w-full mt-16 lg:mt-0">

                    {/* Label */}

                    <span
                        className="inline-block bg-violet-100 text-violet-700 uppercase text-[10px] sm:text-xs font-semibold tracking-wider px-3 sm:px-4 py-2 rounded-full "
                    >
                        About UIKEY Services
                    </span>


                    <h2
                        className="text-2xl sm:text-3xl md:text-[36px] font-bold text-slate-900 mt-3 leading-tight "
                    >
                        Delivering Smart Technology &
                        <br className="hidden lg:block" />
                        Digital Excellence
                    </h2>



                    <p
                        className="text-gray-600 mt-5 leading-6 sm:leading-7 text-sm sm:text-[15px] max-w-2xl "
                    >
                        UIKey Services specializes in advanced TDL
                        development, business automation, web and software
                        solutions, and AI-based digital tools. We help
                        businesses modernize and operate with efficiency.
                    </p>


                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 "
                    >

                        <MissionCard
                            icon={FaFlag}
                            title="Our Mission"
                            description="To empower individuals and businesses with innovative software solutions, automation systems, and reliable IT services that enhance productivity and growth."
                            iconBg="bg-violet-600"
                        />

                        <MissionCard
                            icon={FaEye}
                            title="Our Vision"
                            description="To become India's most trusted brand in TDL development, business automation, and IT solutions, enabling digital innovation and long-term success."
                            iconBg="bg-green-500"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;