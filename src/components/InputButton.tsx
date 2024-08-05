const InputButton = () => {
  return (
    <div className="rounded-full p-2  w-full shadow-md">
      <form action="" className="flex justify-between">
        <input type="email" placeholder="Enter your email" 
        className="grow outline-none pl-2" />
        <input
          type="submit"
          value="Get Started"
          className="bg-accentColor font-semibold text-white px-4 py-2 rounded-full"
        />
      </form>
    </div>
  );
};

export default InputButton;
