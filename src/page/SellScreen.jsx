import { Formik, Form, Field } from "formik";
import validator from "validator";

import {
  MdProductionQuantityLimits as MdProduct,
  MdOutlineDescription as Description,
  MdAttachMoney,
} from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

import Navbar from "../components/layout/Navbar";
import Container from "../components/utilities/Container";
import Image from "../components/utilities/Image";
import Input from "../components/layout/Input";
import Button from "../components/layout/Button";
import RadioSection from "../components/utilities/RadioSection";

import shopping from "../images/undraw_web_shopping_re_owap.svg";
import { useState } from "react";

//Validacion de los campos
const validate = (v) => {
  const errors = {};
  if (!v.nameProduct) {
    errors.nameProduct = "Campo obligatorio";
  }

  if (!v.description) {
    errors.description = "Campo obligatorio";
  }

  if (!v.price) {
    errors.price = "Campo obligatorio";
  }

  if (v.pictures.includes("0")) {
    errors.pictures = "Campo obligatorio";
  }

  if (!v.status) {
    errors.price = "Campo obligatorio";
  }

  return errors;
};

const SellScreen = () => {
  const [files, setFiles] = useState([]);

  console.log(files);

  const handlePublicProduct = (values) => {
    values.pictures = [...files];
    console.log(values);
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
          Vender
        </h1>
        <div className="flex-row-reverse items-center block gap-24 md:px-10 h-screen2 md:flex">
          <div className="hidden mx-auto md:block">
            <Image
              src={shopping}
              alt="vamos de shopping"
              width={400}
              className="animate__animated animate__fadeIn"
            />
          </div>
          <div className="md:px-16 md:w-3/6 animate__animated animate__fadeIn">
            <Formik
              initialValues={{
                nameProduct: "",
                description: "",
                price: "",
                pictures: files,
                status: "",
              }}
              validate={validate}
              onSubmit={handlePublicProduct}
            >
              <Form>
                <Input
                  name="nameProduct"
                  label="Nombre del Producto"
                  type="text"
                  icon={<MdProduct size={20} />}
                />
                <Input
                  name="description"
                  label="Descripción"
                  type="textarea"
                  icon={<Description size={20} />}
                />
                <Input
                  name="price"
                  label="Precio"
                  type="number"
                  min="0"
                  icon={<MdAttachMoney size={20} />}
                />
                <RadioSection />
                {/* Input para subir fotos */}
                <div className="flex gap-2">
                  <Input
                    label="Fotos del Producto"
                    type="text"
                    name="pictures"
                    value={`${files.length} archivo(s)`}
                    icon={<AiOutlinePicture size={20} />}
                  />
                  <div className="relative flex items-center justify-center mb-5 bg-white border rounded-lg cursor-pointer w-14 h-14 border-gray2 text-blue">
                    <AiOutlinePicture size={20} />
                    <input
                      type="file"
                      name="pictures"
                      className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
                      multiple
                      onChange={(e) => {
                        setFiles([...files, ...e.target.files]);
                      }}
                      accept="image/png, image/jpeg"
                      id="files"
                    />
                  </div>
                </div>
                {/* Input para subir fotos */}
                <Button type="submit">Publicar</Button>
              </Form>
            </Formik>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SellScreen;
