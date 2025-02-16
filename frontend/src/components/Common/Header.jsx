import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* topbar */}
      <TopBar />
      {/* navbar */}
      <Navbar />
      {/* cart drawer */}
    </header>
  );
};

export default Header;
