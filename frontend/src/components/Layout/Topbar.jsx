import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <IoLogoFacebook className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoTiktok className="size-4" />
          </a>
        </div>
        <div className="text-sm text-center uppercase flex-grow">
          <span>Giao hàng toàn quốc - Nhanh chóng và đáng tin cậy!</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
