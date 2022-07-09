import { useField } from "formik";

const Input = ({ label, icon, ...rest }) => {
  const [field, meta] = useField(rest);

  return (
    <>
      <div className="w-full mb-6">
        <div className="flex items-center px-3 bg-white border rounded-lg border-gray2 h-11 text-gray focus-within:border-blue">
          {icon}
          <input
            {...field}
            {...rest}
            placeholder={label}
            className="px-3 text-xl font-semibold text-black focus:outline-none placeholder:text-gray"
          />
        </div>
        {meta.touched && meta.error && <p className="font-normal text-red">{meta.error}</p>}
      </div>
    </>
  );
};

export default Input;
