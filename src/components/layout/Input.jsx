import { useField } from "formik";

const Input = ({ label, icon, ...rest }) => {
  const [field, meta] = useField(rest);

  return (
    <>
      <div className="w-full mb-6">
        <div className="flex items-center w-full px-3 bg-white border rounded-lg h-14 border-gray2 text-gray focus-within:border-blue">
          {icon}
          <input
            {...field}
            {...rest}
            placeholder={label}
            className="w-full px-3 text-xl font-semibold text-black focus:outline-none placeholder:text-gray"
          />
        </div>
        {meta.touched && meta.error && (
          <p className="font-semibold md:text-lg text-red">{meta.error}</p>
        )}
      </div>
    </>
  );
};

export default Input;
