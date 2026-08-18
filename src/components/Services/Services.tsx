import ServiceCard from "./ServiceCard";
import {services} from "./ServiceData";

const Services = () => {
  return (
    <section id="services" className="bg-[#F8F6FD] py-2 sm:py-12 lg:py-8 px-4 sm:px-6">

      <div className="w-full max-w-[1200px] mx-auto px-4">

        <div className="text-center">

          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Powerful Digital Solutions For Your Business
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-7">
            End-to-end solutions designed to grow your business with automation,software & innovation.
          </p>

        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-12 lg:mt-14">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;