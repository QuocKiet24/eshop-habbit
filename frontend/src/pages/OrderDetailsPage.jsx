import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "Ha Noi",
        district: "Hai Ba Trung",
        commune: "Hai Ba Trung",
      },
      orderItems: [
        {
          productId: "1",
          name: "Product 1",
          color: "Red",
          size: "S",
          quantity: 1,
          price: 10000000,
          image: "https://picsum.photos/200?random=2",
        },
        {
          productId: "3",
          name: "Product 3",
          color: "Blue",
          size: "L",
          quantity: 2,
          price: 5000000,
          image: "https://picsum.photos/200?random=1",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>
          {/* customer, payment, shipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="text-gray-600">
                Payment Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-gray-600">
                Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="text-gray-600">
                Shipping Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-gray-600">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.district}, ${orderDetails.shippingAddress.commune}`}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Color</th>
                  <th className="px-4 py-2">Size</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-12 object-cover rounded-lg mr-2"
                      />
                      <Link
                        to={`/products/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">
                      {item.color ? item.color : "N/A"}
                    </td>
                    <td className="py-2 px-4">
                      {item.size ? item.size : "N/A"}
                    </td>
                    <td className="py-2 px-4">
                      {item.price.toLocaleString()}₫
                    </td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">
                      {(item.price * item.quantity).toLocaleString()}₫
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* back to order */}
          <Link to={`/my-orders`} className="text-blue-500 hover:underline">
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
