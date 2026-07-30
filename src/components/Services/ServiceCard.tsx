import type { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 hover:shadow-lg transition-all duration-300">

      <div className="flex items-start gap-3">

    
        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
          <Icon className="text-violet-700 text-xl" />
        </div>

        
        <div className="flex-1">

          <h3 className="text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 text-gray-500 text-sm leading-7">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;