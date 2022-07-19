import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import validator from "validator";
import { FiMail, FiLock } from "react-icons/fi";

import Container from "../utilities/Container";
import Image from "../utilities/Image";
import Input from "../layout/Input";
import Button from "../layout/Button";
import SocialNetworks from "./SocialNetworks";

import shopping from "../../images/undraw_window_shopping_re_0kbm.svg";
import logo from "../../images/logo.svg";

import { startLoginEmailPassword } from "../../action/auth";

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
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(startLoginEmailPassword(email, password));
  };

  return (
    <Container>
      <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
        Messirve
      </h1>
      <div className="flex-row-reverse items-center block gap-24 md:px-10 md:h-screen md:flex">
        <div className="mx-auto">
          <Image
            src={shopping}
            alt="vamos de shopping"
            width={400}
            className="animate__animated animate__fadeIn"
          />
        </div>
        <div className="md:px-16 md:w-3/6 animate__animated animate__fadeIn">
          <Image
            src={logo}
            alt="logo de messirve"
            width={150}
            className="hidden md:block"
          />
          <h2 className="text-2xl font-bold md:text-3xl mb-9">
            Iniciar Sesión
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={validate}
            onSubmit={handleLogin}
          >
            <Form>
              <Input
                name="email"
                icon={<FiMail size={20} />}
                label="Correo Electrónico"
                type="email"
              />
              <Input
                name="password"
                icon={<FiLock size={20} />}
                label="Contraseña"
                type="password"
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
        </div>
      </div>
    </Container>
  );
};

export default LoginScreen;
