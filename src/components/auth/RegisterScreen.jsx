import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import validator from "validator";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import Container from "../utilities/Container";
import Image from "../utilities/Image";
import Input from "../layout/Input";
import Button from "../layout/Button";
import SocialNetworks from "./SocialNetworks";

import cart from "../../images/undraw_add_to_cart_re_wrdo.svg";
import logo from "../../images/logo.svg";
import { startCreateUserWithEmailAndPassword } from "../../action/auth";

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
  } else if (
    !validator.isStrongPassword(v.password, {
      minSymbols: 0,
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
    })
  ) {
    errors.password = "Debe tener al menos una mayúscula y minúsculas y un número 🤡";
  }
  return errors;
};

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const handleRegister = ({ email, password, name }) => {
    dispatch(startCreateUserWithEmailAndPassword(email, password, name));
  };

  return (
    <Container>
      <h1 className="mt-10 mb-4 text-2xl font-extrabold text-center md:hidden">
        Messirve
      </h1>
      <div className="flex-row-reverse items-center block gap-24 md:px-10 md:h-screen md:flex">
        <div className="mx-auto animate__animated animate__fadeIn">
          <Image src={cart} alt="vamos a comprar" width={400} />
        </div>
        <div className="md:px-16 md:w-3/6 animate__animated animate__fadeIn">
          <Image
            src={logo}
            alt="logo de messirve"
            width={150}
            className="hidden md:block"
          />
          <h2 className="text-2xl font-bold mb-9 md:text-3xl">Registrarse</h2>
          <SocialNetworks />
          <p className="my-6 text-base font-semibold text-center text-gray">
            O regístrate con...
          </p>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validate={validate}
            onSubmit={handleRegister}
          >
            <Form>
              <Input name="name" icon={<FiUser size={20} />} label="Nombre" />
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
              <Button type="submit">Registrarse</Button>
            </Form>
          </Formik>
          <p className="my-6 text-base font-semibold text-center text-gray">
            Ya tienes cuenta?{" "}
            <Link to="/auth/login" className="text-blue">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default RegisterScreen;
