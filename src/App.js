import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Single from "./components/pages/Single";
import Layout from "./components/Layout/Layout";
import LearnMore from "./components/pages/LearnMore";
import LearnProduct from "./components/pages/LearnProduct";
import SingleSlider from "./components/pages/SingleSlider";
import AboutPage from "./components/pages/AboutPage";
import MainSingle from "./components/pages/MainSingle";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Single />} />
            <Route path="products/:id" element={<MainSingle />} />
            <Route path="learn-more" element={<LearnMore />} />
            <Route path="learn-product/:id" element={<LearnProduct />} />
            <Route path="single-slider" element={<SingleSlider />} />
            <Route path="single-slider/:id" element={<SingleSlider />} />
            <Route path="/about-page" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
