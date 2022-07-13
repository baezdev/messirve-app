const SecondaryInput = ({ label, icon, ...rest }) => {
  return (
    <>
      <div className="w-full mb-6">
        <div className="flex items-center w-full px-3 mx-0 bg-white border rounded-lg h-14 border-gray2 text-gray focus-within:border-blue">
          {icon}
          <input
            {...rest}
            placeholder={label}
            className="w-full px-3 text-xl font-semibold text-black focus:outline-none placeholder:text-gray"
          />
        </div>
      </div>
    </>
  );
};

export default SecondaryInput;
