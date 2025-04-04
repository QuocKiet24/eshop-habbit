const checkout = {
  _id: 1,
  createdAt: new Date(),
  checkoutItems: [
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
      productId: "2",
      name: "Product 2",
      color: "Red",
      size: "M",
      quantity: 2,
      price: 50000000,
      image: "https://picsum.photos/200?random=4",
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "New York",
    district: "Manhattan",
    commune: "Manhattan",
    phone: "1234567890",
    note: "No note",
  },
};

const OrderConfirmationPage = () => {
  const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 5);
    return orderDate.toLocaleDateString();
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order id and date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculatedEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">
                      Color: {item.color} | Size: {item.size}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-md">{item.price.toLocaleString()}₫</p>
                  <p className="text-gray-500 text-sm">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* payment and Delivery info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">{checkout.shippingAddress.city}</p>
              <p className="text-gray-600">
                {checkout.shippingAddress.district}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.commune}
              </p>
              <p className="text-gray-600">{checkout.shippingAddress.phone}</p>
              <p className="text-gray-600">{checkout.shippingAddress.note}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
