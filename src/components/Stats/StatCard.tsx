import type { IconType } from "react-icons";

interface StatCardProps {
  icon: IconType;
  number: string;
  title: string;
}

const StatCard = ({
  icon: Icon,
  number,
  title,
}: StatCardProps) => {
  return (
    <div className="flex items-center gap-5 px-8 py-6">

      <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">

        <Icon className="text-violet-700 text-2xl" />

      </div>

      <div>

        <h2 className="text-3xl font-bold text-violet-700">

          {number}

        </h2>

        <p className="text-gray-500 text-sm mt-1">

          {title}

        </p>

      </div>

    </div>
  );
};

export default StatCard;