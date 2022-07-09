import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import validator from "validator";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import Container from "../utilities/Container";
import Image from "../utilities/Image";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import SocialNetworks from "./SocialNetworks";

import cart from "../../images/undraw_add_to_cart_re_wrdo.svg";

//Validacion de los campos
const validate = (v) => {
  const errors = {};
  //Validacion del nombre
  if (!v.name) {
    errors.name = "Necesitamos saber cómo te llamas 👽";
  } else if (!validator.isAlpha(v.name, ["es-ES"], { ignore: " " })) {
    errors.name = "No lo sé Rick parece falso 🥸";
  }

  //Validacion del correo
  if (!v.email) {
    errors.email = "Se necesita un Correo Electrónico 🤡";
  } else if (!validator.isEmail(v.email)) {
    errors.email = "Eso no es un Correo Electrónico 🤡";
  }

  //Validacion de la contraseña
  if (!v.password) {
    errors.password = "Se necesita una Contraseña 🤡";
  } else if (!validator.isStrongPassword(v.password, { minSymbols: 0 })) {
    errors.password = "Puedes Hacerlo Mejor 🤡";
  }
  return errors;
};

const RegisterScreen = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center">
        Messirve
      </h1>
      <Image src={cart} alt="vamos a comprar" />
      <h2 className="text-2xl font-bold mb-9">Registrarse</h2>
      <SocialNetworks />
      <p className="my-6 text-base font-semibold text-center text-gray">
        O regístrate con...
      </p>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input name="name" icon={<FiUser size={20} />} label="Nombre" />
          <Input
            name="email"
            icon={<FiMail size={20} />}
            label="Correo Electrónico"
          />
          <Input
            name="password"
            icon={<FiLock size={20} />}
            label="Contraseña"
          />
          <Button type="submit">Registrarse</Button>
        </Form>
      </Formik>
      <p className="my-6 text-base font-semibold text-center text-gray">
        Ya tienes cuenta?
        <Link to="/auth/login" className="text-blue">
          Iniciar Sesión
        </Link>
      </p>
    </Container>
  );
};

export default RegisterScreen;
