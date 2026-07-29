import ProcessCard from "./ProcessCard";
import {processData} from "./ProcessData";

const Process = () => {
  return (
    <section id="process" className="bg-[#F8F6FD] py-10">

      <div className="max-w-[1200px] mx-auto px-4">

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left */}

          <div className="lg:col-span-1 w-[400px]">

            <span className="inline-block bg-violet-100 text-violet-700 text-xs uppercase font-semibold px-4 py-2 rounded-full">
              How We Work
            </span>

            <h2 className="text-3xl font-bold mt-5">
              Our Simple Process
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              We follow a proven process to deliver quality solutions.
            </p>

          </div>

          {/* Right */}

          <div className="w-[800px] lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-1 ml-40">

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

      </div>

    </section>
  );
};

export default Process;