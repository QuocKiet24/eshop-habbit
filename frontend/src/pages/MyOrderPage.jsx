import { useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createAt: new Date(),
          shippingAddress: {
            city: "Ha Noi",
            country: "Viet Nam",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "32145",
          createAt: new Date(),
          shippingAddress: {
            city: "Ho Chi Minh",
            country: "Viet Nam",
          },
          orderItems: [
            {
              name: "Product 3",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 1200,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Hình ảnh</th>
              <th className="py-2 px-4 sm:py-3">ID đơn hàng</th>
              <th className="py-2 px-4 sm:py-3">Ngày tạo</th>
              <th className="py-2 px-4 sm:py-3">Địa chỉ giao hàng</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Giá</th>
              <th className="py-2 px-4 sm:py-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-r-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {" "}
                    {new Date(order.createAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                    &nbsp;
                    {new Date(order.createAt).toLocaleTimeString("vi-VN")}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city} , ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.totalPrice}đ
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "text-green-700 bg-green-100"
                          : "text-red-700 bg-red-100"
                      } px-1 py-2 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Đã thanh toán" : "Đang chờ"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  Bạn chưa có đơn hàng
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
