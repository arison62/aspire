import InputButton from "./InputButton";

const CallToAction = () => {
  return (
    <div>
      <div className="max-container bg-secondaryColor mt-28 p-12 space-y-8 rounded-xl">
        <p className="text-5xl sm:text-6xl text-white font-semibold w-fit mx-auto">
          Get started with Aspire today
        </p>
        <p className="text-white text-center mx-auto max-w-xl">
          We are self-service data analytics software that lets you create
          visually appealing data visualisations and insightful dashboards in
          minutes.
        </p>
        <div className="max-w-sm mx-auto">
          <InputButton />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
