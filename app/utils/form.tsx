const Form = () => {
  return (
    <>
      <div className="max-lg:px-4">
        <p className="text-white z-90 text-xl font-normal mix-blend-lighten w-100 text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-2 mix-blend-lighten py-4 justify-center max-sm:flex-col items-center max-sm:gap-5">
          <input
            type="text"
            placeholder="Email Address"
            className="px-4 py-2  border border-gray-300 rounded focus:outline-none bg-transparent max-sm:w-full"
          />
          <button className="bg-red-700 text-white px-4 py-2 rounded focus:outline-none w-44 text-xl font-medium">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
