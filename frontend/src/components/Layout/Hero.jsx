import { Link } from "react-router-dom";
import heroimg from "../../assets/heroimg.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroimg}
        alt="hero img"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Street <br /> Wear
            <span className="text-2xl md:text-3xl">&reg;</span>
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
