import InputButton from "./InputButton";
import checkIcon from '../assets/Vector 202.png'

const Hero = () => {
  return (
    <div>
      <section className="max-container mt-28">
        <div className="w-fit mx-auto space-y-5">
          <p className="text-5xl sm:text-6xl text-primaryColor text-center font-semibold">Multipurpose Website Templates</p>
          <p className=" text-5xl sm:text-6xl text-primaryColor text-center font-semibold">That boost your Sales</p>
          <p className="text-slate-400 text-center">Empowering Your Financial Journey through Customized Asset Management Services</p>
        </div>
        <div className="mx-auto w-full sm:w-full sm:max-w-md mt-12">
          <InputButton />
        </div>
        <div className="mx-auto flex items-center justify-center w-fit mt-5 space-x-2">
        <img src={checkIcon} alt="check icon"/>
        <span className="text-slate-400 text-xs">No credit card required</span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
