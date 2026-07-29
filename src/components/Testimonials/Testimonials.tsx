import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./TestimonialsData";
import ContactForm from "./ContactForm";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#F8F6FD] py-10">

      <div className="max-w-7xl mx-auto px-2">


        <div className="grid lg:grid-cols-2 gap-12 items-start">


          <div>

            <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-xs font-semibold uppercase">
              Client Testimonials
            </span>

            <h2 className="text-4xl font-bold mt-4">
              What Our Clients Say
            </h2>

            <p className="text-gray-500 mt-3 leading-7 max-w-xl">
              We value the trust our clients place in us and the results we deliver.
            </p>

            <div className="w-[700px] gap-2 flex">
              {testimonialsData.map((item) => (
                <TestimonialCard
                  key={item.id}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  review={item.review}
                />
              ))}
            </div>

          </div>

          <ContactForm />

        </div>

      </div>

    </section>
  );
};

export default Testimonials;