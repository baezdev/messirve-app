import React from "react";
import { Field } from "formik";

const RadioSection = () => {
  return (
    <div
      role="group"
      className="p-3 mb-6 bg-white border rounded-lg border-gray2 text-gray"
    >
      <p className="text-xl font-semibold text-gray">Estado del Producto</p>
      <div className="flex items-center mt-2 font-semibold text-black">
        <label className="mr-3">
          <span className="mr-1">Excelente</span>
          <Field type="radio" name="status" value="excelente" />
        </label>
        <label className="mr-3">
          <span className="mr-1">Bueno</span>
          <Field type="radio" name="status" value="bueno" />
        </label>
        <label className="mr-3">
          <span className="mr-1">Regular</span>
          <Field type="radio" name="status" value="regular" />
        </label>
      </div>
    </div>
  );
};

export default RadioSection;
