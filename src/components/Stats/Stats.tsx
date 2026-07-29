import {
  FaTrophy,
  FaFolderOpen,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

import StatCard from "./StatCard";

const Stats = () => {
  return (
    <section id="stats" className="py-10 bg-[#F8F6FD]">

      <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          <div className="border-r border-gray-200">
            <StatCard
              icon={FaTrophy}
              number="5+"
              title="Years of Experience"
            />
          </div>

          <div className="border-r border-gray-200">
            <StatCard
              icon={FaFolderOpen}
              number="100+"
              title="Projects Completed"
            />
          </div>

          <div className="border-r border-gray-200">
            <StatCard
              icon={FaUsers}
              number="50+"
              title="Happy Clients"
            />
          </div>

          <StatCard
            icon={FaGlobe}
            number="10+"
            title="Industries Served"
          />

        </div>

      </div>

    </section>
  );
};

export default Stats;