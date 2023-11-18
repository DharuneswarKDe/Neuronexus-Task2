import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Explore, Preview } from "./pages/index";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Appp from "./pages/Appp";
import SignupPage from "./pages/SignupPage";
const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full overflow-y-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Appp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup"element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
