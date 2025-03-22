const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
