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
    <div className="flex items-center gap-3 hover:shadow-md transition-all duration-300 rounded-lg">
      <div className="w-11 h-11 rounded-full bg-violet-100 flex items-center justify-center">
        <Icon className="text-violet-700 text-xl" />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 text-sm">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;