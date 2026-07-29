import {
  FaLightbulb,
  FaHeadset,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const FeatureStrip = () => {
  return (
    <section className=" mb-2 w-[790px]">
      <div className=" max-w-6xl mx-auto bg-white rounded-2xl shadow-lg grid grid-cols-4 gap-4 px-6 py-5">

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