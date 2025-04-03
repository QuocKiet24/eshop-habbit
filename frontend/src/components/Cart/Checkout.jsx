import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      id: 1,
      name: "Product 1",
      size: "S",
      color: "Red",
      price: 10,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 2,
      name: "Product 2",
      size: "M",
      color: "Blue",
      price: 100,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  totalPrice: 110,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    address: "",
    email: "",
    city: "",
    district: "",
    commune: "",
    phone: "",
    note: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful: ", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Thanh toán</h2>
        <form onSubmit={handleCreateCheckout} className="text-lg mb-4">
          <h3 className="text-lg mb-4">Thông tin đặt hàng</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Họ và tên</label>
            <input
              type="text"
              value={shippingAddress.fullName}
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  fullName: e.target.value,
                });
              }}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value="p7Pjz@example.com"
                className="w-full p-2 border rounded"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                value={shippingAddress.phone}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Địa chỉ</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div>
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div>
              {" "}
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div>
              {" "}
              <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ghi chú</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={shippingAddress.note}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, note: e.target.value })
              }
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded"
              >
                Tiếp tục thanh toán
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) =>
                    alert("Thanh toán thất bại. Vui lòng thử lại.", err)
                  }
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Đơn hàng</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
                <p className="text-xl">{product.price?.toLocaleString()}₫</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Tạm tính</p>
          <p>{cart.totalPrice?.toLocaleString()}₫</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Phí giao hàng</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 pt-4 border-t">
          <p>Tổng cộng</p>
          <p>{cart.totalPrice?.toLocaleString()}₫</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
