import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    brand: [],
    minPrice: 0,
    maxPrice: 10000000,
  });

  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const categories = ["Top Wear", "Bottom Wear", "Accessories"];

  const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

  const sizes = ["S", "M", "L", "XL"];

  const brand = ["Aastu", "Brand X", "Brand Y", "Brand Z"];

  const gender = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilterParams({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 10000000,
    });
    setPriceRange([0, params.maxPrice || 10000000]);
  }, [searchParams]);

  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    let newFilters = { ...filterParams };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilterParams(newFilters);

    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key] && newFilters[key].length > 0)) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filterParams, minPrice: 0, maxPrice: newPrice };
    setFilterParams(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Danh mục</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filterParams.category === category}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Giới tính
        </label>
        {gender.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filterParams.gender === gender}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Màu sắc</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`size-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                filterParams.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>
      {/* size filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Kích cỡ</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filterParams.size.includes(size)}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      {/* brand filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Thương hiệu
        </label>
        {brand.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filterParams.brand.includes(brand)}
              className="mr-2 size-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>
      {/* price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="ư-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>0</span>
          <span>{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
