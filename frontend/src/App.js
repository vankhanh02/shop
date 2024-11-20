import "./App.css";
import { Navbar } from "./Components/Nav/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ShopCate from "./Pages/ShopCate";
import ShopProduct from "./Pages/ShopProduct";
import Authentication from "./Pages/Authentication";
import ShopCart from "./Pages/ShopCart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import woman_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<ShopCate category="men" banner={men_banner} />}
          />
          <Route
            path="/womens"
            element={<ShopCate category="women" banner={woman_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCate category="kid" banner={kid_banner} />}
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/product" element={<ShopProduct />}>
            <Route path=":productId" element={<ShopProduct />} />
          </Route> */}
          <Route path="/product/:productId" element={<ShopProduct />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/login" element={<Authentication />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
