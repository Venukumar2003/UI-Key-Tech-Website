interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

const ProcessCard = ({
  number,
  title,
  description,
}: ProcessCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 hover:shadow-lg transition-all duration-300">

      <div className="w-10 h-10 rounded-full bg-violet-700 text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>

      <h3 className="mt-1 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-500 leading-7">
        {description}
      </p>

    </div>
  );
};

export default ProcessCard;