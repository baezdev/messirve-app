import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import SocialNetwork from "./SocialNetwork";

const SocialNetworks = () => {
  const networks = [
    <FcGoogle size={20} />,
    <BsFacebook size={20} color="#007AFF" />,
    <BsApple size={20} />,
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {networks.map((network, i) => (
        <SocialNetwork key={i} icon={network} />
      ))}
    </div>
  );
};

export default SocialNetworks;
