import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import validator from "validator";
import { FiMail, FiLock } from "react-icons/fi";

import Container from "../utilities/Container";
import Image from "../utilities/Image";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import SocialNetworks from "./SocialNetworks";

import shopping from "../../images/undraw_window_shopping_re_0kbm.svg";

//Validacion de los campos
const validate = (v) => {
  const errors = {};
  if (!v.email) {
    errors.email = "Se necesita un Correo Electrónico 🤡";
  } else if (!validator.isEmail(v.email)) {
    errors.email = "Eso no es un Correo Electrónico 🤡";
  }

  if (!v.password) {
    errors.password = "Se necesita una Contraseña 🤡";
  } else if (!validator.isStrongPassword(v.password, { minSymbols: 0 })) {
    errors.password = "Puedes Hacerlo Mejor 🤡";
  }
  return errors;
};

const LoginScreen = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center">
        Messirve
      </h1>
      <Image src={shopping} alt="vamos de shopping" />
      <h2 className="text-2xl font-bold mb-9">Iniciar Sesión</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
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
          <Button type="submit">Iniciar Sesión</Button>
        </Form>
      </Formik>
      <p className="my-6 text-base font-semibold text-center text-gray">
        O inicia con...
      </p>
      <SocialNetworks />
      <p className="my-6 text-base font-semibold text-center text-gray">
        No tienes cuenta?{" "}
        <Link to="/auth/register" className="text-blue">
          Registrate
        </Link>
      </p>
    </Container>
  );
};

export default LoginScreen;
