import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Đăng ký ngay để nhận tin tức mới nhất và ưu đãi độc quyền! 🚀📩
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Đăng ký và nhận 10% giảm giá cho đơn hàng đầu tiên
          </p>
          {/* form */}
          <form className="flex ">
            <input
              type="email"
              placeholder="Nhập email của bạn ở đây!"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all uppercase"
            >
              Đăng ký
            </button>
          </form>
        </div>

        {/* shop */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Cửa hàng</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Áo nam
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Áo nữ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Quần nam
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Quần nữ
              </Link>
            </li>
          </ul>
        </div>
        {/* support */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Cần trợ giúp</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Liên hệ ngay
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Câu hỏi thường gặp
              </Link>
            </li>
          </ul>
        </div>
        {/* follow */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Theo dõi chúng tôi</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoFacebook className="size-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="size-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoTiktok className="size-4" />
            </a>
          </div>
          <p className="text-gray-500">Liên hệ</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            0123-456-789
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          © 2025. Trquockiet24, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
