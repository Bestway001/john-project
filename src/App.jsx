import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import Testimonial from "./Pages/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AboutPage" element={<AboutPage />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Testimonial" element={<Testimonial />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
