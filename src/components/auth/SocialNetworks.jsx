import { useDispatch } from "react-redux";

import { FcGoogle } from "react-icons/fc";

import SocialNetwork from "./SocialNetwork";
import { startWithGoogle } from "../../action/auth";

const SocialNetworks = () => {
  const dispatch = useDispatch();

  const handleLoginGoogle = () => {
    dispatch(startWithGoogle());
  };

  return (
    <div className="w-2/4 mx-auto">
      <SocialNetwork
        icon={<FcGoogle size={25} />}
        onClick={handleLoginGoogle}
      />
    </div>
  );
};

export default SocialNetworks;
