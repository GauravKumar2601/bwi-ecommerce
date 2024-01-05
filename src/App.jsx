import AllProducts from "./components/AllProducts/AllProducts";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr className="border-1" />
      <div className="flex max-md:flex-col">
        <Filter />
        <AllProducts />
      </div>

      <Footer />
    </div>
  );
}

export default App;
