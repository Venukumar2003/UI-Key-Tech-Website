import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div
      className="w-full flex items-center gap-3 p-2 rounded-xl hover:shadow-md transition-all duration-300 "
    >


      <div
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 "
      >
        <Icon className="text-violet-700 text-lg sm:text-xl" />
      </div>



      <div className="min-w-0">

        <h3
          className="font-semibold text-gray-800 text-xs sm:text-sm "
        >
          {title}
        </h3>

        <p
          className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-5 "
        >
          {description}
        </p>

      </div>

    </div>
  );
};

export default FeatureCard;