import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import { ImFire } from "react-icons/im";

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
    </div>
  );
};

export default Home;
