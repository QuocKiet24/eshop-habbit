import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import { ImFire } from "react-icons/im";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";

const placeholderProducts = [
  {
    _id: 5,
    name: "product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 6,
    name: "product 6",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 7,
    name: "product 7",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 8,
    name: "product 8",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <NewArrivals />

      {/* best sellers */}
      <h2 className="text-3xl text-center font-bold mb-4 uppercase">
        Bán chạy
        <span className="inline-block  mx-3">
          <ImFire className=" text-primary" />
        </span>
      </h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">For Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
