import {
  FaLightbulb,
  FaHeadset,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const FeatureStrip = () => {
  return (
    <section className="w-full">

      <div
        className="w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-8 px-5 sm:px-6 lg:px-8 py-5 sm:py-6 "
      >

        <FeatureCard
          icon={FaLightbulb}
          title="Smart Solutions"
          description="Future ready technology"
        />

        <FeatureCard
          icon={FaHeadset}
          title="Reliable Support"
          description="24/7 expert assistance"
        />

        <FeatureCard
          icon={FaChartLine}
          title="Results Driven"
          description="Growth focused approach"
        />

        <FeatureCard
          icon={FaShieldAlt}
          title="Secure & Scalable"
          description="Built for performance"
        />

      </div>

    </section>
  );
};

export default FeatureStrip;