import "./App.css";
import FilterAndSortSection from "./components/FilterAndSortSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopSection from "./components/ShopSection";
function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Navbar></Navbar>
      <ShopSection />
      <FilterAndSortSection />

      <Footer />
    </div>
  );
}

export default App;
