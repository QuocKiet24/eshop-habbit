import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 1,
      user: { name: "John Doe" },
      totalPrice: 1000000,
      status: "Processing",
    },
  ];

  // Mocked data for now (should be replaced with real API data)
  const revenue = 1000000;
  const totalOrders = 22;
  const totalProducts = 50;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">
            {revenue.toLocaleString()}₫
          </p>
        </div>

        {/* Orders Card */}
        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-2xl font-bold text-blue-600">{totalOrders}</p>
          <Link
            to="/admin/orders"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Manage Orders
          </Link>
        </div>

        {/* Products Card */}
        <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Products
          </h2>
          <p className="text-2xl font-bold text-purple-600">{totalProducts}</p>
          <Link
            to="/admin/products"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Manage Products
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-3 px-4">{order._id}</td>
                    <td className="py-3 px-4">{order.user.name}</td>
                    <td className="py-3 px-4">{order.totalPrice}</td>
                    <td className="py-3 px-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
