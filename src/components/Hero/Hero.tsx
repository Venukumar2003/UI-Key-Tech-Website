import {
    FaArrowRight,
    FaCog,
    FaCode,
    FaRobot,
    FaChartLine,
} from "react-icons/fa";

import qrImage from "../../assets/images/qr.png";
// import apni_digi from "../../assets/images/apni_digi.png";
import image from "../../assets/images/qrcode.png"

import FloatingCard from "./FloatingCard";
import FeatureStrip from "./FeatureStrip";

import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section id="home" className="bg-[#F8F6FD] pt-3 overflow-hidden">

            <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-5">

    

                <div className="w-full min-w-0">

                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                        Digital Solutions for Education, Automation & Business Growth
                    </span>

                    <h1 className="text-6xl font-bold mt-6 leading-tight">
                        Professional
                        <br />

                        <span className="text-purple-700">
                            TDL & IT Solutions
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-6 text-lg leading-8">
                        We deliver smart technology, automation and digital
                        excellence to help businesses grow, scale and succeed
                        in the modern world.
                    </p>

                    <div className="flex gap-5 mt-10">

                        <Link to="testimonials">
                            <button
                                className="
                                    border border-purple-700
                                    text-purple-700
                                    hover:bg-purple-100
                                    active:bg-purple-500
                                    px-8 py-4
                                    rounded-xl
                                    flex items-center gap-2
                                    cursor-pointer
                                    transition
                                "
                            >
                                Request Demo
                                <FaArrowRight />
                            </button>
                        </Link>

                        <Link to="testimonials">
                            <button
                                className="
                                    border border-purple-700
                                    text-purple-700
                                    px-8 py-4
                                    rounded-xl
                                    hover:bg-purple-200
                                    active:bg-purple-500
                                    cursor-pointer
                                    transition
                                "
                            >
                                Contact Us
                            </button>
                        </Link>

                    </div>

                    <div className="mt-10 sm:mt-12 lg:mt-16">
                        <FeatureStrip />
                    </div>

                </div>


         

                <div className="w-full flex flex-col items-center lg:block">

   

                    <div
                        className="
                            relative
                            w-[280px]
                            h-[450px]
                            rounded-[24px]
                            bg-gradient-to-b
                            from-violet-600
                            to-purple-900
                            shadow-2xl
                            flex
                            flex-col
                            items-center
                            lg:ml-40
                            lg:mb-12
                            mx-auto
                        "
                    >

                        <h2 className="mt-4 text-2xl font-bold text-purple-600 bg-white p-3 rounded-2xl">
                            Uikey Services
                        </h2>

                        <p className="text-white mt-1">
                            Digital Solutions
                        </p>

                        <div className="bg-white rounded-2xl p-4 mb-4 mt-2">

                            <img
                                src={qrImage}
                                className="w-[180px] h-[180px]"
                                alt="UIkey Services QR Code"
                            />

                        </div>

                        <p className="text-white mb-2">
                            Scan to view our services
                        </p>



                        <div
                            className="
                                absolute
                                bottom-1
                                w-[250px]
                                bg-white
                                rounded-b-[24px]
                                py-3
                                rounded-3xl
                            "
                        >

                            <p className="text-center text-gray-500 text-sm">
                                Powered by
                            </p>

                            <div className="flex items-center justify-center gap-2 -ml-10">

                                <img
                                    src={image}
                                    alt="Apni Digi"
                                    className="w-10 h-10 object-fit"
                                />

                                <h3 className="font-semibold text-lg text-black">
                                    Apni Digi
                                </h3>

                            </div>

                        </div>


                        {/* ==================================================
                            DESKTOP FLOATING CARDS
                            These are visible only on lg screens
                        ================================================== */}

                        <div className="hidden lg:block">

                            <FloatingCard
                                className="-left-55 top-12"
                                icon={FaCog}
                                title="Automation"
                                description="Streamline your business process."
                            />

                            <FloatingCard
                                className="-right-55 top-10"
                                icon={FaCode}
                                title="TDL Development"
                                description="Custom TDL for Tally & Business"
                            />

                            <FloatingCard
                                className="-left-55 bottom-24"
                                icon={FaRobot}
                                title="AI Solutions"
                                description="Smart AI Powered Innovation"
                            />

                            <FloatingCard
                                className="-right-55 bottom-15"
                                icon={FaChartLine}
                                title="Business Growth"
                                description="Scale faster with Smart Technology"
                            />

                        </div>

                    </div>


                    {/* ==================================================
                        MOBILE FLOATING CARDS
                        Visible only below lg
                    ================================================== */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-4
                            w-full
                            max-w-[600px]
                            mt-6
                            lg:hidden
                        "
                    >

                        <FloatingCard
                            className="relative !left-auto !right-auto !top-auto !bottom-auto w-full"
                            icon={FaCog}
                            title="Automation"
                            description="Streamline your business process."
                        />

                        <FloatingCard
                            className="relative !left-auto !right-auto !top-auto !bottom-auto w-full"
                            icon={FaCode}
                            title="TDL Development"
                            description="Custom TDL for Tally & Business"
                        />

                        <FloatingCard
                            className="relative !left-auto !right-auto !top-auto !bottom-auto w-full"
                            icon={FaRobot}
                            title="AI Solutions"
                            description="Smart AI Powered Innovation"
                        />

                        <FloatingCard
                            className="relative !left-auto !right-auto !top-auto !bottom-auto w-full"
                            icon={FaChartLine}
                            title="Business Growth"
                            description="Scale faster with Smart Technology"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;