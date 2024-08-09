const InputButton = () => {
  return (
    <div className="bg-white rounded-full px-2 py-3  w-full shadow-md">
      <form action="" className="flex justify-between relative">
        <input type="email" placeholder="Enter your email" 
        className="grow outline-none pl-2" />
        <input
          type="submit"
          value="Get Started"
          className="bg-accentColor 
          flex-1 font-semibold absolute right-0 top-1/2 -translate-y-1/2
           text-white px-4 py-2 rounded-full"
        />
      </form>
    </div>
  );
};

export default InputButton;
