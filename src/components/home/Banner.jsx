import Image from "../utilities/Image";

import logo from "../../images/logo.svg";

const Banner = () => {
  return (
    <div className="h-24 bg-white border rounded-lg border-gray2 md:hidden animate__animated animate__fadeIn">
      <Image src={logo} alt="Logo messirve" width={100} />
    </div>
  );
};

export default Banner;
