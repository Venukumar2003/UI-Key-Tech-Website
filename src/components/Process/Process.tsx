import ProcessCard from "./ProcessCard";
import { processData } from "./ProcessData";

const Process = () => {
  return (
    <section id="services" className="bg-[#F8F6FD] py-2 sm:py-12 lg:py-6 px-4 sm:px-6">

      <div className="w-full max-w-[1200px] mx-auto px-4">

        <div className="text-center">

          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            How We Work
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Our Simple Process
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-7">
             We follow a proven process to deliver quality solutions.
          </p>

        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-12 lg:mt-10">

          {processData.map((item) => (
            <ProcessCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>





  );
};

export default Process;