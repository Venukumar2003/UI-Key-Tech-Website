import WhyChooseUsCard from "./WhyChooseUsCard";
import { WhyChooseUsData } from "./WhyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8F6FD] py-10 sm:py-12 lg:py-16 px-4 sm:px-6">

      <div className="w-full max-w-7xl mx-auto px-4">

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">

          <div className="lg:col-span-2">

            <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-xs uppercase font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-bold mt-5">
              We Deliver Solutions That Drive Success
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              High-quality solutions built for performance,
              security, scalability and long-term success.
            </p>

          </div>


          <div className="w-full lg:col-span-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">

            {WhyChooseUsData.map((item, index) => (
              <WhyChooseUsCard
                key={index}
                icon={item.icon}
                title={item.title}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;