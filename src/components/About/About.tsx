import {
    FaFlag,
    FaEye,
    FaUsers,
} from "react-icons/fa";

import MissionCard from "./MissionCard";
import teamImage from "../../assets/images/team.png";

const About = () => {
    return (
        <section id="about" className="bg-[#F8F6FD] py-10">

            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">


                <div className="relative">

                    <img
                        src={teamImage}
                        alt="Team"
                        className="w-full h-[380px] object-cover rounded-3xl"
                    />

                    <div className="absolute -bottom-6 w-[300px] rounded-2xl bg-gradient-to-r from-violet-700 to-purple-600 p-5 shadow-xl text-white -ml-15 -mb-20">
                        <div className="flex items-start gap-4">

                            {/* Icon */}

                            <div className="w-12 h-12 rounded-full bg-violet-500/60 flex items-center justify-center flex-shrink-0">
                                <FaUsers className="text-white text-xl" />
                            </div>

                            <div>

                                <h3 className="text-[16px] font-bold leading-6">
                                    Trusted by Businesses
                                    <br />
                                    Across India
                                </h3>

                                <p className="mt-2 text-[12px] leading-5 text-violet-100">
                                    We help businesses modernize
                                    <br />
                                    and grow with reliable &
                                    scalable IT solutions.
                                </p>

                            </div>

                        </div>
                    </div>



                </div>


                <div>

                    <span className="inline-block bg-violet-100 text-violet-700 uppercase text-xs font-semibold tracking-wider px-4 py-2 rounded-full">
                        About UIKEY Services
                    </span>

                    <h2 className="text-[36px] font-bold text-slate-900 mt-3 leading-tight">
                        Delivering Smart Technology &
                        <br />
                        Digital Excellence
                    </h2>

                    <p className="text-gray-600 mt-5 leading-7 text-[15px]">
                        UIKey Services specializes in advanced TDL development,business automation, web and software solutions, and AI-based digital tools. We help businesses modernize and operate with efficiency.
                    </p>

                    <div className="w-[600px] grid grid-cols-1 md:grid-cols-2 gap-5 mr-2 mt-8 gap-18">

                        <MissionCard
                            icon={FaFlag}
                            title="Our Mission"
                            description="To empower individuals and businesses with innovative software solutions, automation systems, and reliable IT services that enhance productivity and growth."
                            iconBg="bg-violet-600"
                        />

                        <MissionCard
                            icon={FaEye}
                            title="Our Vision"
                            description="To become India's most trusted brand in TDL development,business automation, and IT solutions, enabling digital innovation and long-term success."
                            iconBg="bg-green-500"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;