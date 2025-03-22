import { useEffect, useState } from "react";
import { toast } from "sonner";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 20000000,
  originalPrice: 25000000,
  description: "This is a stylish jacket",
  brand: "Brand X",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Jacket",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 2,
    name: "product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 3,
    name: "product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 4,
    name: "product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleQuantiyChange = (action) => {
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Vui lòng chọn kích cỡ và màu sắc.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Đã thêm vào giỏ hàng.", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Product Image ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-black border-1"
                    : "border-gray-300 border-1"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnails */}
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Product Image ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice.toLocaleString() &&
                `${selectedProduct.originalPrice.toLocaleString()}`}
              &nbsp;đ
            </p>
            <p className="text-lg text-gray-500 mb-2">
              {selectedProduct.price.toLocaleString()} đ
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Màu: </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor((prev) =>
                        prev === color ? null : color
                      )
                    }
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-2 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size: </p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize((prev) => (prev === size ? null : size))
                    }
                    className={`px-4 py-2 border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Số lượng: </p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantiyChange("minus")}
                  className="min-w-8 px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantiyChange("plus")}
                  className="min-w-8 px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Đang thêm..." : "Thêm giỏ hàng"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Thông tin chi tiết: </h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Thương hiệu</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Chất liệu</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            Sản phẩm tương tự
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
