import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      id: 1,
      name: "Product 1",
      size: "S",
      color: "Red",
      quantity: 2,
      price: 10000000,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 2",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 1",
      size: "S",
      color: "Red",
      quantity: 2,
      price: 10,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 2",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 1",
      size: "S",
      color: "Red",
      quantity: 2,
      price: 10,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 1,
      name: "Product 2",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Màu: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>{product.price.toLocaleString()} VNĐ</p>
          </div>
          <button>
            <RiDeleteBin3Line className="size-6 mt-2 text-red-600" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
