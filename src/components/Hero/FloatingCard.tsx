import type { IconType } from "react-icons";

interface FloatingCardProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}

const FloatingCard = ({
  icon: Icon,
  title,
  description,
  className = "",
}: FloatingCardProps) => {
  return (
    <div
      className={`absolute bg-white rounded-2xl shadow-lg p-3 sm:p-4 w-[190px] sm:w-[208px] items-start gap-3 ${className}`}
    >

      {/* Icon */}

      <div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0"
      >
        <Icon className="text-violet-700 text-lg sm:text-xl" />
      </div>


      <div className="min-w-0">

        <h3 className="font-semibold text-sm sm:text-[15px]">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-5">
          {description}
        </p>

      </div>

    </div>
  );
};

export default FloatingCard;