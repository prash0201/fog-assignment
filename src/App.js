import "./App.css";
import FilterAndSortSection from "./components/FilterAndSortSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopSection from "./components/ShopSection";
function App() {
  return (
    <div className="flex min-h-screen w-full flex-col  font-inter">
     <Navbar></Navbar>
     <ShopSection/>
     <FilterAndSortSection/>
     <Products/>
     <Footer/>
    </div>
    
  );
}

export default App;
