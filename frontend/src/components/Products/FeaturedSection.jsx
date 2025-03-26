import { HiShoppingBag } from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import { HiShieldCheck } from "react-icons/hi";

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            Miễn phí giao hàng toàn quốc
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Cho đơn hàng từ 500k
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiRocketLaunch className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">Giao hàng hỏa tốc</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Tại TP. Hồ Chí Minh
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShieldCheck className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2 uppercase">
            đổi trả trong 30 ngày
          </h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Đảm bảo hoàn lại tiền
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
