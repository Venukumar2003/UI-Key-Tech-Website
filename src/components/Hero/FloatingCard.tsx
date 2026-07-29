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
  className,
}: FloatingCardProps) => {
  return (
    <div
      className={`absolute bg-white rounded-2xl shadow-lg p-2 w-52 flex items-start gap-4 ${className}`}
    >
      {/* Icon */}

      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
        <Icon className="text-violet-700 text-xl" />
      </div>

      {/* Text */}

      <div>
        <h3 className="font-semibold text-[17px]">{title}</h3>

        <p className="text-sm text-gray-500 mt-2 leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FloatingCard;