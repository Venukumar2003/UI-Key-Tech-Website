import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
}

const WhyChooseUsCard = ({
  icon: Icon,
  title,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-lg transition">

      <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center mx-auto">

        <Icon className="text-violet-700 text-2xl" />

      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>

    </div>
  );
};

export default WhyChooseUsCard;