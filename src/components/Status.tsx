import StatusCard from "./StatusCard";
import { about } from "../data/data";

const Status = () => {
  return (
    <div className="mt-28">
      <div className="max-container">
        <p
          className="text-5xl sm:text-6xl text-primaryColor 
        font-semibold max-w-4xl text-center mx-auto"
        >
          Our 12 years of together have given us much to be proud of
        </p>
        <div
          className="mt-24 grid gap-8 
        grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 2xl:grid-cols-4"
        >
          {about.map((data) => (
            <StatusCard
              key={data.icon}
              title={data.title}
              img={data.icon}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
