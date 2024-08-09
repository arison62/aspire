import TeamsCard from "./TeamsCard";
import { teamCards } from "../data/data";

const Teams = () => {
  return (
    <div className="mt-28">
      <div className="max-container">
        <p
          className="text-sm mx-auto w-fit
         px-2 py-1 bg-accentColor/20 text-accentColor rounded-full "
        >
          OUR TEAM
        </p>
        <div className="mt-12 w-fit mx-auto space-y-5">
          <p className="text-5xl sm:text-6xl
           text-primaryColor text-center font-semibold">
            Meet our dream team
          </p>
          <p className="text-slate-400 text-center max-w-xl">
            We’re dedicated group of Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamCards.map((data) => (
            <TeamsCard key={data.img} img={data.img} title={data.title} desc={data.desc} />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default Teams;
