import WhyChooseUsCard from "./WhyChooseUsCard";
import { WhyChooseUsData } from "./WhyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section id="whywechooseus" className="bg-[#F8F6FD] py-2 sm:py-12 lg:py-8 px-4 sm:px-6">

      <div className="w-full max-w-[1200px] mx-auto px-4">

        <div className="text-center">

          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            We Deliver Solutions That Drive Success
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-7">
            High-quality solutions built for performance,
            security, scalability and long-term success.
          </p>

        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-12 lg:mt-10">


          {WhyChooseUsData.map((item, index) => (
            <WhyChooseUsCard
              key={index}
              icon={item.icon}
              title={item.title}
            />
          ))}

        </div>

      </div>

    </section>





  );
};

export default WhyChooseUs;