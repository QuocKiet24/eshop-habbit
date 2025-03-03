import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
