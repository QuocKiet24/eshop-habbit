const checkout = {
  _id: 1,
  createAt: new Date(),
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
