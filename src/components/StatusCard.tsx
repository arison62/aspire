const StatusCard = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className="p-10 flex flex-col
      space-y-3 border-2 rounded-xl 
      max-h-[287px] overflow-hidden"
    >
      <img src={img} alt={img} className="w-[70px] h-[70px]" />
      <p
        className="text-4xl text-primaryColor
        font-semibold"
      >
        {title}
      </p>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
};

export default StatusCard;
