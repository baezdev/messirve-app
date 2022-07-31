const Button = ({ children, type, disabled, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center w-full gap-2 text-xl font-bold text-center text-white duration-200 rounded-lg bg-blue h-14 ${
        !disabled ? "hover:-translate-y-1" : "cursor-not-allowed bg-opacity-40"
      }`}
      type={type ? type : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
