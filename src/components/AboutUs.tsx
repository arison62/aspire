import arrowIcon from "../assets/Icon.png";
import confImg from "../assets/Rectangle 21.png";

const AboutUs = () => {
  return (
    <div className="bg-secondaryColor mt-28 pb-20">
      <div className="pt-28 w-fit mx-auto max-container">
        <div className="flex flex-wrap">
          <div className="max-w-md flex flex-col gap-12">
            <p className="text-6xl font-medium text-white">About our company</p>
            <a href="#" className="text-white flex items-center gap-2 group">
              <span>Learn More</span>
              <img
                src={arrowIcon}
                alt=""
                className="group-hover:translate-x-2"
              />
            </a>
          </div>
          <div className="max-w-lg text-white space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              atque cumque ratione repellendus officiis dolor iste quae veniam,
              sed provident porro quasi qui temporibus doloremque fuga accusamus
              architecto dignissimos autem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              atque cumque ratione repellendus officiis dolor iste quae veniam,
              sed provident porro quasi qui temporibus doloremque fuga accusamus
              architecto dignissimos autem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              atque cumque ratione repellendus officiis dolor iste quae veniam,
              sed provident porro quasi qui temporibus doloremque fuga accusamus
              architecto dignissimos autem.
            </p>
          </div>
        </div>
        <img src={confImg} alt="" className="mt-28"/>
      </div>
    </div>
  );
};

export default AboutUs;
