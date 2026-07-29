import type { IconType } from "react-icons";

interface MissionCardProps {
  icon: IconType;
  title: string;
  description: string;
  iconBg: string;
}

const MissionCard = ({
  icon: Icon,
  title,
  description,
  iconBg,
}: MissionCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex items-start gap-4 -ml-15">

      <div
        className={`w-10 h-10 min-w-[40px] rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}
      >
        <Icon className="text-white text-lg" />
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mt-3 leading-7">
          {description}
        </p>
      </div>

    </div>
  );
};

export default MissionCard;