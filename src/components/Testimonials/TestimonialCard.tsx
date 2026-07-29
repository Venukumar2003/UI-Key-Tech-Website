import { FaStar, FaQuoteRight } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 relative">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-gray-500 text-sm">
            {role}
          </p>

          <div className="flex text-yellow-400 mt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

        </div>

      </div>

      <p className="mt-6 text-gray-500 leading-7 text-sm">
        {review}
      </p>

      <FaQuoteRight className="absolute bottom-3 right-4 text-3xl text-violet-600" />

    </div>
  );
};

export default TestimonialCard;